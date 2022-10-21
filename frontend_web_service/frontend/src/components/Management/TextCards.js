import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getParkingDataID } from '../../controllers/parkingController';


export default function TextCards() {
    const [parkingData, setParkingData] = useState([]);
  
    let params = useParams();
  
    useEffect(() => {
        const fetchData = async () => {
        const data = await getParkingDataID(params.id)
        console.log(data);
        setParkingData(data);
          }
      fetchData();
    }, [params.id]);
  
    

    return (
    <><div>
            <Card variant='outlined' sx={{ width: 2000, m: 3 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Total Slots:
                    </Typography>
                    <div className='custom-parkingcard'>
                        {parkingData.qtyTotalSlots}
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
                            {parkingData.qtyFreeSlots}
                        </div>
                    </CardContent>
                </Card>
                <Card variant='outlined' sx={{ width: 2000, m: 3 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Occupied Slots:
                        </Typography>
                        <div className='custom-parkingcard'>
                            {parkingData.qtyBussySlots}
                        </div>
                    </CardContent>
                </Card>
                <Card variant='outlined' sx={{ width: 2000, m: 3 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Booked Slots:
                        </Typography>
                        <div className='custom-parkingcard'>
                            {parkingData.qtyReservedSlots}
                        </div>
                    </CardContent>
                </Card>
                <Card variant='outlined' sx={{ width: 2000, m: 3 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Blocked Slots:
                        </Typography>
                        <div className='custom-parkingcard'>
                            {parkingData.qtyBlockedSlots}
                        </div>
                    </CardContent>
                </Card>
            </div></>
  );
}
