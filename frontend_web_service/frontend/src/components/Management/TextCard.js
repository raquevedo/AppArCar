import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function TextCards(props) {
  
    return (
            <Card variant='outlined' sx={{ width: 2000, m: 3 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <div className='custom-parkingcard'>
                        {props.value}
                    </div>
                </CardContent>
            </Card>
  );
}
