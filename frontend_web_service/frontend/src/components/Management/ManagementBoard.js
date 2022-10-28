import React, { useState }  from 'react';
import { useParams } from 'react-router-dom';
import HoursTab from './Hours/HoursTab';
import ReservationsTab from './Reservations/ReservationsTab';

export default function ManagementBoard() {
  /* Extracts the ID from the url */
  const { id } = useParams();
  const [toggleState, setToggleState] = useState("reservations");

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className="grid-y">
        
          <div className="cell tab-head grid-margin-y grid-padding-y">
            <div className="grid-x grid-margin-x grid-padding-x grid-margin-y grid-padding-y">
              <div className={
                    toggleState === "reservations" ? "cell large-3 small-3 center cell-active-tabs" : "cell cell-tabs bn24 center large-3 small-3"
                  }>
                <button
                  className={
                    toggleState === "reservations" ? "tab-active-tabs" : "tab"
                  }
                  onClick={() => toggleTab("reservations")}
                >
                  Reservations
                </button>
              </div>
              <div className={
                    toggleState === "hours" ? "cell large-3 small-3 center cell-active-tabs" : "cell cell-tabs bn24 center large-3 small-3"
                  }>
                <button
                  className={
                    toggleState === "hours" ? "tab-active-tabs" : "tab"
                  }
                  onClick={() => toggleTab("hours")}
                >
                  Hours
                </button>
              </div>
              <div className={
                    toggleState === "settings" ? "cell large-3 small-3 center cell-active-tabs" : "cell cell-tabs bn24 center large-3 small-3"
                  }>
                <button
                  className={
                    toggleState === "settings" ? "tab-active-tabs" : "tab"
                  }
                  onClick={() => toggleTab("settings")}
                >
                  Settings
                </button>
              </div>
              <div className={
                    toggleState === "status" ? "cell large-3 small-3 center cell-active-tabs" : "cell cell-tabs bn24 center large-3 small-3"
                  }>
                <button
                  className={
                    toggleState === "status" ? "tab-active-tabs" : "tab"
                  }
                  onClick={() => toggleTab("status")}
                >
                  Status
                </button>
              </div>
            </div>
          </div>

          <div className="cell tab-body">
            {toggleState === "reservations" && <ReservationsTab id={id} />}
            {toggleState === "hours" && <HoursTab id={id}/>}
            {toggleState === "settings" && <div>'settings'</div>}
            {toggleState === "status" && <div>'status'</div>}
          </div>
        </div>
      </div>
    
  );
}
