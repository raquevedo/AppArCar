import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { getParkingDataID } from '../../controllers/parkingController';



export default function TotalSlots() {
  const [totalSlots, setTotalSlots] = useState([]);

  let params = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getParkingDataID(params.id)
    console.log(data);
    setTotalSlots(data);
  }



  return (
    <Card variant='outlined' sx={{ width: 2000, m: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Blocked Slots:
          </Typography>
            <div className='custom-parkingcard'>
              {totalSlots.qtyBlockedSlots}
            </div>
      </CardContent>
      
    </Card>
  );
}
