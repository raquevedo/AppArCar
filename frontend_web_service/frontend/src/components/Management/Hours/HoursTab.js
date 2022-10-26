import React, { useState, useEffect } from 'react';
import HoursPicker from './HoursPicker';
import * as dayjs from 'dayjs'
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
    const newSettings = {
      "startMonday": fromMonday,
      "endMonday": toMonday,
      "startTuesday": fromTuesday,
      "endTuesday": toTuesday,
      "startWednesday": fromWednesday,
      "endWednesday": toWednesday,
      "startThursday": fromThursday,
      "endThursday": toThursday,
      "startFriday": fromFriday,
      "endFriday": toFriday,
      "startSaturday": fromSaturday,
      "endSaturday": toSaturday,
      "startSunday": fromSunday,
      "endSunday": toSunday,
    }
    patchParkingSettings(props.id, newSettings)
  }

  useEffect(() => {
    async function fetchParkingSettings() {
      let res = await getParkingSettings(props.id)
      if (res.status === 200) {
        let data = await res.json();
        setFromMonday(dayjs(data['startMonday'], 'HH:mm:ss.SSS'));
        setToMonday(dayjs(data['endMonday'], 'HH:mm:ss.SSS'));
        setFromTuesday(dayjs(data['startTuesday'], 'HH:mm:ss.SSS'));
        setToTuesday(dayjs(data['endTuesday'], 'HH:mm:ss.SSS'));
        setFromWednesday(dayjs(data['startWednesday'], 'HH:mm:ss.SSS'));
        setToWednesday(dayjs(data['endWednesday'], 'HH:mm:ss.SSS'));
        setFromThursday(dayjs(data['startThursday'], 'HH:mm:ss.SSS'));
        setToThursday(dayjs(data['endThursday'], 'HH:mm:ss.SSS'));
        setFromFriday(dayjs(data['startFriday'], 'HH:mm:ss.SSS'));
        setToFriday(dayjs(data['endFriday'], 'HH:mm:ss.SSS'));
        setFromSaturday(dayjs(data['startSaturday'], 'HH:mm:ss.SSS'));
        setToSaturday(dayjs(data['endSaturday'], 'HH:mm:ss.SSS'));
        setFromSunday(dayjs(data['startSunday'], 'HH:mm:ss.SSS'));
        setToSunday(dayjs(data['endSunday'], 'HH:mm:ss.SSS'));
    }}
    fetchParkingSettings();
  }, [props.id]);

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
      <button class='button' onClick={updateParkingSettings}>Update</button>
    </div>
  );
}