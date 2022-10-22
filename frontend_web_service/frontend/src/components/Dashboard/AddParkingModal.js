import React from "react";
import AddParking from "../Forms/AddParking";

function AddParkingModal(props) {
  const handleClose = () => {
    props.setShowModal(false)
  }

  return(
    <div className="modal ">
      <div className="modal-main gasper">
        <div className="grid-container login-box-modal">
          <div className="grid-y">
            <div className="cell">
              <div className="grid-x align-justify">
                <div className="cell small-10">
                  <h1 children="modal-title">New Parking Garage</h1>
                </div>
                <div className="cell small-1">
                  <button className="button-pop bn24" onClick={handleClose}>X</button>
                </div>
              </div>
            </div>
            <div className="cell">
              <AddParking setShowModal={props.setShowModal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddParkingModal;