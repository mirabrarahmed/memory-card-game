import React from 'react'
import '../Modal.css'


const Modal = ({ setIsOpen, title, description, modbtn }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">{title}</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
          </button>
          <div className="modalContent">
            {description}
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() => setIsOpen(false)}>
                {modbtn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;