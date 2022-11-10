import React from "react";

function NoticeModal(props) {
  const handleClose = () => {
    props.setShowModal(false);
  };

  return (
    <div className="modal center">
      <div className="grid-container login-box-modal">
        <div className="grid-y grid-margin-x grid-padding-x">
          <div className="cell">
            <div className="grid-x align-justify center">
              <div className="cell small-8">
                <h1 className="text-form" children="modal-title">
                  {props.header}
                </h1>
              </div>
            </div>
          </div>
          <div className="cell">
            <p className="modal-text-alert">{props.body}</p>
          </div>
          <div className="cell">
            <button type="" className="bn632-hover bn24" onClick={handleClose}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoticeModal;
