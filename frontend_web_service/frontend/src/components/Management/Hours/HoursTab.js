import React, { useState, useEffect } from "react";
import HoursPicker from "./HoursPicker";
import * as dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import {
  getParkingSettings,
  patchParkingSettings,
} from "../../../controllers/parkingController";

export default function HoursTab(props) {
  dayjs.extend(utc);

  const [fromMonday, setFromMonday] = useState(dayjs(0));
  const [toMonday, setToMonday] = useState(dayjs(0));
  const [fromTuesday, setFromTuesday] = useState(dayjs(0));
  const [toTuesday, setToTuesday] = useState(dayjs(0));
  const [fromWednesday, setFromWednesday] = useState(dayjs(0));
  const [toWednesday, setToWednesday] = useState(dayjs(0));
  const [fromThursday, setFromThursday] = useState(dayjs(0));
  const [toThursday, setToThursday] = useState(dayjs(0));
  const [fromFriday, setFromFriday] = useState(dayjs(0));
  const [toFriday, setToFriday] = useState(dayjs(0));
  const [fromSaturday, setFromSaturday] = useState(dayjs(0));
  const [toSaturday, setToSaturday] = useState(dayjs(0));
  const [fromSunday, setFromSunday] = useState(dayjs(0));
  const [toSunday, setToSunday] = useState(dayjs(0));

  async function updateParkingSettings() {
    const newSettings = {
      startMonday: fromMonday.add(dayjs().utcOffset(), "minute"),
      endMonday: toMonday.add(dayjs().utcOffset(), "minute"),
      startTuesday: fromTuesday.add(dayjs().utcOffset(), "minute"),
      endTuesday: toTuesday.add(dayjs().utcOffset(), "minute"),
      startWednesday: fromWednesday.add(dayjs().utcOffset(), "minute"),
      endWednesday: toWednesday.add(dayjs().utcOffset(), "minute"),
      startThursday: fromThursday.add(dayjs().utcOffset(), "minute"),
      endThursday: toThursday.add(dayjs().utcOffset(), "minute"),
      startFriday: fromFriday.add(dayjs().utcOffset(), "minute"),
      endFriday: toFriday.add(dayjs().utcOffset(), "minute"),
      startSaturday: fromSaturday.add(dayjs().utcOffset(), "minute"),
      endSaturday: toSaturday.add(dayjs().utcOffset(), "minute"),
      startSunday: fromSunday.add(dayjs().utcOffset(), "minute"),
      endSunday: toSunday.add(dayjs().utcOffset(), "minute"),
    };
    patchParkingSettings(props.id, newSettings);
  }

  useEffect(() => {
    async function fetchParkingSettings() {
      let res = await getParkingSettings(props.id);
      if (res.status === 200) {
        let data = await res.json();
        if (data['startMonday'] !== null) {
          setFromMonday(dayjs.utc(data['startMonday'], ['HH:mm:ss', 'HH:mm:ss:SSS']));
        }
        if (data['endMonday'] !== null) {
          setToMonday(dayjs.utc(data['endMonday'], ['HH:mm:ss', 'HH:mm:ss:SSS']));
        }
        if (data['startTuesday'] !== null) {
          setFromTuesday(dayjs.utc(data['startTuesday'], ['HH:mm:ss', 'HH:mm:ss:SSS']));
        }
        if (data['endTuesday'] !== null) {
          setToTuesday(dayjs.utc(data['endTuesday'], ['HH:mm:ss', 'HH:mm:ss:SSS']));
        }
        if (data['startWednesday'] !== null) {
          setFromWednesday(dayjs.utc(data['startWednesday'], ['HH:mm:ss', 'HH:mm:ss:SSS']));
        }
        if (data['endWednesday'] !== null) {
          setToWednesday(dayjs.utc(data['endWednesday'], ['HH:mm:ss', 'HH:mm:ss:SSS']));
        }
        if (data['startThursday'] !== null) {
          setFromThursday(dayjs.utc(data['startThursday'], ['HH:mm:ss', 'HH:mm:ss:SSS']));
        }
        if (data['endThursday'] !== null) {
          setToThursday(dayjs.utc(data['endThursday'], ['HH:mm:ss', 'HH:mm:ss:SSS']));
        }
        if (data['startFriday'] !== null) {
          setFromFriday(dayjs.utc(data['startFriday'], ['HH:mm:ss', 'HH:mm:ss:SSS']));
        }
        if (data['endFriday'] !== null) {
          setToFriday(dayjs.utc(data['endFriday'], ['HH:mm:ss', 'HH:mm:ss:SSS']));
        }
        if (data['startSaturday'] !== null) {
          setFromSaturday(dayjs.utc(data['startSaturday'], ['HH:mm:ss', 'HH:mm:ss:SSS']));
        }
        if (data['endSaturday'] !== null) {
          setToSaturday(dayjs.utc(data['endSaturday'], ['HH:mm:ss', 'HH:mm:ss:SSS']));
        }
        if (data['startSunday'] !== null) {
          setFromSunday(dayjs.utc(data['startSunday'], ['HH:mm:ss', 'HH:mm:ss:SSS']));
        }
        if (data['endSunday'] !== null) {
          setToSunday(dayjs.utc(data['endSunday'], ['HH:mm:ss', 'HH:mm:ss:SSS']));
        }   
    }}
    fetchParkingSettings();
  }, [props.id]);

  return (
    <div className="grid-y grid-margin-x grid-padding-x">
      <div className="cell">
        <table className="hover">
          <thead>
            <tr>
              <th>Day</th>
              <th>From</th>
              <th>Until</th>
            </tr>
          </thead>
          <tbody>
            <HoursPicker
              day={"Monday"}
              fromHour={fromMonday}
              setFromHour={setFromMonday}
              toHour={toMonday}
              setToHour={setToMonday}
            />
            <HoursPicker
              day={"Tuesday"}
              fromHour={fromTuesday}
              setFromHour={setFromTuesday}
              toHour={toTuesday}
              setToHour={setToTuesday}
            />
            <HoursPicker
              day={"Wednesday"}
              fromHour={fromWednesday}
              setFromHour={setFromWednesday}
              toHour={toWednesday}
              setToHour={setToWednesday}
            />
            <HoursPicker
              day={"Thursday"}
              fromHour={fromThursday}
              setFromHour={setFromThursday}
              toHour={toThursday}
              setToHour={setToThursday}
            />
            <HoursPicker
              day={"Friday"}
              fromHour={fromFriday}
              setFromHour={setFromFriday}
              toHour={toFriday}
              setToHour={setToFriday}
            />
            <HoursPicker
              day={"Saturday"}
              fromHour={fromSaturday}
              setFromHour={setFromSaturday}
              toHour={toSaturday}
              setToHour={setToSaturday}
            />
            <HoursPicker
              day={"Sunday"}
              fromHour={fromSunday}
              setFromHour={setFromSunday}
              toHour={toSunday}
              setToHour={setToSunday}
            />
          </tbody>
        </table>
      </div>
      <div className="cell">
        <button className="modal-button" onClick={updateParkingSettings}>
          Update
        </button>
      </div>
    </div>
  );
}
