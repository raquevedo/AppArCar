import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function BlockedSlots() {
  return (
    <Card variant='outlined' sx={{ width: 2000, m : 3 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Blocked Slots:
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          *number*
        </Typography>
      </CardContent>
    </Card>
  );
}