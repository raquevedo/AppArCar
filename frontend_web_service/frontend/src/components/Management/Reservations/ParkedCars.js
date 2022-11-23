import React from "react";
import ParkedCar from "./ParkedCar";

export default function ParkedCars(props) {
  return (
    <div id='parked-cars-list'>
      <h2>Parked Cars</h2>
      <table>
        <thead>
          <tr>
            <th>License Plate</th>
            <th>Expiration Date</th>
            <th>Check Out</th>
          </tr>
        </thead>
        <tbody>
          {props.parkedCars.map((reservation, index) => (
            <ParkedCar
              key={index}
              reservation={reservation}
              parkedCars={props.parkedCars}
              setParkedCars={props.setParkedCars}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
