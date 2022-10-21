import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getParkingDataID } from '../../controllers/parkingController';


export default function TextCards() {
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
    <><div>
            <Card variant='outlined' sx={{ width: 2000, m: 3 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Total Slots:
                    </Typography>
                    <div className='custom-parkingcard'>
                        {totalSlots.qtyTotalSlots}
                    </div>
                </CardContent>
            </Card>
        </div><div>
                <Card variant='outlined' sx={{ width: 2000, m: 3 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Available Slots:
                        </Typography>
                        <div className='custom-parkingcard'>
                            {totalSlots.qtyFreeSlots}
                        </div>
                    </CardContent>
                </Card>
                <Card variant='outlined' sx={{ width: 2000, m: 3 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Occupied Slots:
                        </Typography>
                        <div className='custom-parkingcard'>
                            {totalSlots.qtyBussySlots}
                        </div>
                    </CardContent>
                </Card>
                <Card variant='outlined' sx={{ width: 2000, m: 3 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Booked Slots:
                        </Typography>
                        <div className='custom-parkingcard'>
                            {totalSlots.qtyReservedSlots}
                        </div>
                    </CardContent>
                </Card>
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
            </div></>
  );
}
