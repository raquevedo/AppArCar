import React from "react";

function NoticeModal(props) {
  const handleClose = () => {
    props.setShowModal(false)
  }

  return(
    <div className="modal">
      <div className="modal-main">
        <div className="grid-container">
          <div className="grid-y">
            <div className="cell">
              <h1 className="modal-title">{props.header}</h1>  
            </div>
            <div className="cell">
              <p className="modal-text">{props.body}</p>
            </div>
            <div className="cell">
              <button type="button" className="modal-button" onClick={handleClose}>Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoticeModal;