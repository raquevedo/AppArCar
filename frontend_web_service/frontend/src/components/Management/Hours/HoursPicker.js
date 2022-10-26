import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import * as dayjs from 'dayjs'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export default function HoursPicker({ day, fromHour, setFromHour, toHour, setToHour }) {
  return(
    <tr>
      <td>{day['day']}</td>
      <td>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            label="From"
            value={dayjs(fromHour, 'HH:mm:ss')}
            onChange={(newValue) => {
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
            value={dayjs(toHour, 'HH:mm:ss')}
            onChange={(newValue) => {
            setToHour(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </td>
    </tr>
  );
}