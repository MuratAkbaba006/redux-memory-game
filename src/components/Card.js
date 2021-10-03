import React from 'react'
import { useSelector } from 'react-redux';
const Card = ({card,FlipCard,index}) => {
  const currentCards = useSelector((state) => state.memory.currentCards);
  const matchedCards = useSelector((state) => state.memory.matchedCards);
  const flipToFront = (currentCards.indexOf(index) !== -1) || matchedCards.indexOf(index) !== -1;
  const correct = matchedCards.indexOf(index) !== -1;
  return (
    <div className={"card-outer " + (flipToFront ? 'flipped ':'') + (correct ? 'correct' : '')} onClick={()=>FlipCard(index)}>
      <div className="card">
        <div className="front">
          <img src={card.image} alt="" />
        </div>
        <div className="back"></div>
      </div>
    </div>
  )
}

export default Card