import React, { useEffect, useState } from "react";
import data from "../data";
import { useSelector, useDispatch } from "react-redux";
import {
  addCards,
  addCurrentCard,
  removeAllandUpdateCurrentCards,
  addMatchedCard,
  addPoint,
  removePoint,
  resetState,
} from "../redux/MemorySlice/MemorySlice";
import { shuffle } from "lodash";
import { nanoid } from "@reduxjs/toolkit";
import Card from "./Card";
import StatusBar from "./StatusBar";
import ModalContainer from "./ModalContainer";
const Board = () => {
  const list = useSelector((state) => state.memory.cards);
  const currentCards = useSelector((state) => state.memory.currentCards);
  const matchedCards = useSelector((state) => state.memory.matchedCards);
  const [clickCount, setClickCount] = useState(0);
  const [won, setWon] = useState(false);
  const dispatch = useDispatch();
  const [reset, setReset] = useState(false);

  const Shuffle = (array) => {
    const uniqueImage = "https://picsum.photos/id/181/200/200";
    const shuffledArray = shuffle([...array, uniqueImage, ...array]);
    return shuffledArray;
  };

  useEffect(() => {
    const images = Shuffle(data);
    const cards = images.map((card) => ({ id: nanoid(), image: card }));
    dispatch(addCards(cards));
    // added state, shuffled cards
  }, [reset]);

  const FlipCard = (index) => {
    setClickCount(clickCount + 1);
    controlCurrentCard(index);
  };

  const controlCurrentCard = (index) => {
    if (currentCards.includes(index)) {
      console.log("zaten varım");
      return;
    } else {
      handleCurrentCard(index, currentCards.length);
    }
  };

  const handleCurrentCard = (index, currentLength) => {
    if (currentLength === 0) {
      dispatch(addCurrentCard(index));
    } else if (currentLength === 1) {
      dispatch(addCurrentCard(index));
      isMatched(index);
    } else {
      dispatch(removeAllandUpdateCurrentCards(index));
    }
  };

  const isMatched = (index) => {
    const firstIndex = currentCards[0];
    const secondIndex = index;
    if (list[firstIndex].image === list[secondIndex].image) {
      // equal two image
      dispatch(addMatchedCard([firstIndex, secondIndex]));
      dispatch(addPoint());
      isWon();
    } else {
      dispatch(removePoint());
    }
  };

  const isWon = () => {
    if (matchedCards.length + 2 === list.length - 1) {
      setWon(true);
    }
  };

  const Reset = () => {
    dispatch(resetState());
    setReset(!reset);
    setWon(false);
    setClickCount(0);
  };

  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ModalContainer won={won} Reset={Reset} clickCount={clickCount} />
      <StatusBar clickCount={clickCount} />
      <div className="board">
        {list.map((card, index) => (
          <Card key={index} card={card} FlipCard={FlipCard} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Board;
