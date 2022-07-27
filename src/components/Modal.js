import React from 'react'
import '../Modal.css'


const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Memory Card Game</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
          </button>
          <div className="modalContent">
            Pick a different picture everytime to win and test your memory. Be careful, choosing the same picture twice will lose you the game.
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() => setIsOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;