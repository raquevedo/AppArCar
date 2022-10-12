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
              <div className="grid-x align-justify">
                <div className="cell small-10">
                  <h1 children="modal-title">{props.header}</h1>
                </div>
                <div className="cell small-1">
                  <button className="button" onClick={handleClose}>X</button>
                </div>
              </div>
            </div>
            <div className="cell">
              <p className="modal-text">{props.body}</p>
            </div>
            <div className="cell">
              <button type="" className="button" onClick={handleClose}>Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoticeModal;