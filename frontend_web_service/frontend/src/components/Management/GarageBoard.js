import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react'

export default function GarageBoard() {
  /* Extracts the ID from the url */
  const { id } = useParams();
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return(
    <><div>{id}</div><><div>{id}</div>
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Notifications
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Hours
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Settings
          </button>
          <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            Status
          </button>
        </div>


        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
              <h1>Notifications</h1>

          </div>

          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >

          </div>

          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >

          </div>
          <div
            className={toggleState === 4 ? "content  active-content" : "content"}
          >

          </div>
        </div>
      </div>
    </></>
  );
}
