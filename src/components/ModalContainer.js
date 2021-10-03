import React from "react";
import Modal from "react-modal";
import { BsArrowRepeat } from "react-icons/bs";
import { useSelector } from "react-redux";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    width: "60%",
  },
};

Modal.setAppElement("#root");
const ModalContainer = ({ won, Reset, clickCount }) => {
  const point = useSelector((state) => state.memory.point);

  return (
    <div>
      <Modal isOpen={won} style={customStyles} contentLabel="Example Modal">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h2>
            Oyunu {point} puan, {clickCount} hamle ile tamamladınız. Tekrar
            Oynamak istermisiniz?{" "}
          </h2>
          <BsArrowRepeat
            onClick={() => Reset()}
            style={{ fontSize: 70, cursor: "pointer", textAlign: "center" }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default ModalContainer;
