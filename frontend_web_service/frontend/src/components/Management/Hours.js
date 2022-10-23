import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function Hours(props) {
  const [value1, setValue1] = React.useState(null);
  const [value2, setValue2] = React.useState(null);

  return (
    <div className='grid-container'>
      <div className='grid-x'>
     <div className='cell small-6'>
      <h1> {props.title}</h1> 
      </div>

      <div className='cell small-6'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label="Select your Hour"
        value={value1}
        onChange={(newValue) => {
          setValue1(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      </LocalizationProvider>
      </div>
      
      
      <div className='cell small-6'>
      <h1> To </h1>
      </div>

        <div className='cell small-6'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label="Select your Hour"
        value={value2}
        onChange={(newValue) => {
          setValue2(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
     
    </LocalizationProvider>
    </div>
     
    </div>
    </div>
  );
}