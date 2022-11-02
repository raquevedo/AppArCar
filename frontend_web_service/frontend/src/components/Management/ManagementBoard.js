import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import HoursTab from "./Hours/HoursTab";
import ReservationsTab from "./Reservations/ReservationsTab";
import SettingsTab from "./Settings/SettingsTab";
import { useNavigate } from "react-router-dom";

export default function ManagementBoard() {
  /* Extracts the ID from the url */
  const { id, tab } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (tab === undefined) {
      // Redirect to default
      navigate("reservations");
    }
  }, [tab, navigate]);

  const renderTab = () => {
    switch (tab) {
      case "reservations":
        return <ReservationsTab id={id} />;
      case "hours":
        return <HoursTab id={id} />;
      case "settings":
        return <SettingsTab id={id} />;
      default:
        return <ReservationsTab id={id} />;
    }
  };

  const baseUrl = `/dashboard/manage/${id}`;
  return (
    <div className="grid-y">
      <div className="cell tab-head grid-margin-y grid-padding-y">
        <div className="grid-x grid-margin-x grid-padding-x grid-margin-y grid-padding-y">
          <div
            className={
              tab === "reservations"
                ? "cell large-3 small-3 center cell-active-tabs"
                : "cell cell-tabs bn24 center large-3 small-3"
            }
            onClick={() => navigate(`${baseUrl}/reservations`)}>
            <button
              className={tab === "reservations" ? "tab-active-tabs" : "tab"}
              
            >
              Reservations
            </button>
          </div>
          <div
            className={
              tab === "hours"
                ? "cell large-3 small-3 center cell-active-tabs"
                : "cell cell-tabs bn24 center large-3 small-3"
            }
            onClick={() => navigate(`${baseUrl}/hours`)}>
            <button
              className={tab === "hours" ? "tab-active-tabs" : "tab"}
              
            >
              Hours
            </button>
          </div>
          <div
            className={
              tab === "status"
                ? "cell large-3 small-3 center cell-active-tabs"
                : "cell cell-tabs bn24 center large-3 small-3"
            }
            onClick={() => navigate(`${baseUrl}/status`)}>
            <button
              className={tab === "status" ? "tab-active-tabs" : "tab"}
              
            >
              Status
            </button>
          </div>
          <div
            className={
              tab === "settings"
                ? "cell large-3 small-3 center cell-active-tabs"
                : "cell cell-tabs bn24 center large-3 small-3"
            }
            onClick={() => navigate(`${baseUrl}/settings`)}>
            <button
              className={tab === "settings" ? "tab-active-tabs" : "tab"}
              
            >
              Settings
            </button>
          </div>
        </div>
      </div>
      <div className="content-tabs">{renderTab()}</div>
    </div>
  );
}
