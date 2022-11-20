import React from 'react';
import TextField from '@mui/material/TextField';
import * as dayjs from 'dayjs'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function HoursPicker({ day, fromHour, setFromHour, toHour, setToHour }) {
  return(
    <tr>
      <td>{day}</td>
      <td>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            label="From"
            value={fromHour}
            onChange={(newValue) => {
              newValue = dayjs(newValue);
              setFromHour(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </td>
      <td>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            label="To"
            value={toHour}
            onChange={(newValue) => {
              newValue = dayjs(newValue);
              setToHour(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </td>
    </tr>
  );
}