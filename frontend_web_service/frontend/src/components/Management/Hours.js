import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import '../App/App.css';

export default function Hours(props) {
  const [value1, setValue1] = React.useState(null);
  const [value2, setValue2] = React.useState(null);

  return (
    <div className='grid-container'>
      <div className='grid-x'>
        <div className='grid-y days'>
          <div className='cell small-6'>
            <h2> {props.title} </h2>
          </div>
        </div>
        <div className='grid-y hours-days'>
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
        </div>
        <div className='grid-y to'>
          <div className='cell small-6'>
            <h2> To </h2>
          </div>
        </div>
        <div className='grid-y hours-to'>
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
    </div>
  );
}