import React from "react";
import { removeById } from "../../../utils/removeById";
import {
  postCheckOut,
} from "../../../controllers/parkingController";

export default function ParkedCar(props) {
  const expirationDate = new Date(props.reservation.expirationAtDttm);

  async function checkCustomerOut(reservationId) {
    let res = await postCheckOut(reservationId);
    if (res.status === 200 || res.status === 204) {
      const newParkedCars = removeById(props.parkedCars, reservationId);
      props.setParkedCars(newParkedCars);
    } else {
      // TODO: Handle error
      console.log("Error checking out customer");
    }
  }

  return (
    <tr>
      <td>{props.reservation['patentId']}</td>
      <td>
        {expirationDate.getHours()}:{expirationDate.getMinutes()}
      </td>
      <td>
        <button
          onClick={() => checkCustomerOut(props.reservation["id"])}
        >
          Check Out
        </button>
      </td>
    </tr>
  );
}
