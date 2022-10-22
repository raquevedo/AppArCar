import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function Hours(props) {
  const [value1, setValue1] = React.useState(null);
  const [value2, setValue2] = React.useState(null);

  return (
    <h1> {props.title} : 
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label="Select your Hour"
        value={value1}
        onChange={(newValue) => {
          setValue1(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <text> To </text>
      <TimePicker
        label="Select your Hour"
        value={value2}
        onChange={(newValue) => {
          setValue2(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    </h1>  
  );
}