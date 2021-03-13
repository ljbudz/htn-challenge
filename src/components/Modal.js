import React from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#modal");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    outline: "none",
    border: "none",
    borderRadius: 0,
    backgroundColor: "transparent"
  },
  overlay: {
    backgroundColor: "#1832496e"
  }
};

const Modal = (props) => {
  const {isOpen, onRequestClose} = props;

  return (
    <ReactModal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      {props.children}
    </ReactModal>
  );
};

export default Modal;