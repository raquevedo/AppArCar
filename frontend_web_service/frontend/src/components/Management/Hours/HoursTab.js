import React, { useState, useEffect } from 'react';
import HoursPicker from './HoursPicker';
import { getParkingSettings, patchParkingSettings } from '../../../controllers/parkingController';

export default function HoursTab(props) {
  const [fromMonday, setFromMonday] = useState();
  const [toMonday, setToMonday] = useState();
  const [fromTuesday, setFromTuesday] = useState();
  const [toTuesday, setToTuesday] = useState();
  const [fromWednesday, setFromWednesday] = useState();
  const [toWednesday, setToWednesday] = useState();
  const [fromThursday, setFromThursday] = useState();
  const [toThursday, setToThursday] = useState();
  const [fromFriday, setFromFriday] = useState();
  const [toFriday, setToFriday] = useState();
  const [fromSaturday, setFromSaturday] = useState();
  const [toSaturday, setToSaturday] = useState();
  const [fromSunday, setFromSunday] = useState();
  const [toSunday, setToSunday] = useState();

  async function updateParkingSettings() {
    console.log('Test')
  }

  useEffect(() => {
    async function fetchParkingSettings() {
      let res = await getParkingSettings(props.id)
      if (res.status === 200) {
        let data = await res.json();
        setFromMonday(data['startMonday']);
        setToMonday(data['endMonday']);
        setFromTuesday(data['startTuesday']);
        setToTuesday(data['endTuesday']);
        setFromWednesday(data['startWednesday']);
        setToWednesday(data['endWednesday']);
        setFromThursday(data['startThursday']);
        setToThursday(data['endThursday']);
        setFromFriday(data['startFriday']);
        setToFriday(data['endFriday']);
        setFromSaturday(data['startSaturday']);
        setToSaturday(data['endSaturday']);
        setFromSunday(data['startSunday']);
        setToSunday(data['endSunday'])
    }}
    fetchParkingSettings();
  }, []);

  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>From</th>
            <th>Until</th>
          </tr>
        </thead>
        <tbody>
          <HoursPicker
            day={'Monday'}
            fromHour={fromMonday}
            setFromHour={setFromMonday}
            toHour={toMonday}
            setToHour={setToMonday}
          />
          <HoursPicker
            day={'Tuesday'}
            fromHour={fromTuesday}
            setFromHour={setFromTuesday}
            toHour={toTuesday}
            setToHour={setToTuesday}
          />
          <HoursPicker
            day={'Wednesday'}
            fromHour={fromWednesday}
            setFromHour={setFromWednesday}
            toHour={toWednesday}
            setToHour={setToWednesday}
          />
          <HoursPicker
            day={'Thursday'}
            fromHour={fromThursday}
            setFromHour={setFromThursday}
            toHour={toThursday}
            setToHour={setToThursday}
          />
          <HoursPicker
            day={'Friday'}
            fromHour={fromFriday}
            setFromHour={setFromFriday}
            toHour={toFriday}
            setToHour={setToFriday}
          />
          <HoursPicker
            day={'Saturday'}
            fromHour={fromSaturday}
            setFromHour={setFromSaturday}
            toHour={toSaturday}
            setToHour={setToSaturday}
          />
          <HoursPicker
            day={'Sunday'}
            fromHour={fromSunday}
            setFromHour={setFromSunday}
            toHour={toSunday}
            setToHour={setToSunday}
          />
        </tbody>
      </table>
      <button onClick={updateParkingSettings}>Update</button>
    </div>
  );
}