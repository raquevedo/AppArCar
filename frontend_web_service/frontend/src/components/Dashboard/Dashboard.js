import React from 'react';
import 'fontsource-roboto';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ParkingHeader from '../Dashboard/ParkingHeader';
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

export default function Dashboard() {
  const classes=makeStyles();
  return(
    
        <Grid className={classes.root}>
            <Grid container spacing={3}>
                

                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <ParkingHeader icon={<DirectionsCarIcon className={classes.icons}/>} title="Total Cocheras: 50"  color="rgba(48,104,247,1)" font="white"/>

                </Grid>

                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <ParkingHeader icon={<DirectionsCarIcon className={classes.icons}/>} title="Cocheras disponibles: 23"  color="rgba(48,104,247,1)" font="white"/>
                    

                </Grid>

                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <ParkingHeader icon={<DirectionsCarIcon className={classes.icons}/>} title="Cocheras ocupadas: 27"  color="rgba(48,104,247,1)" font="white"/>
                    

                </Grid>



            </Grid>
        </Grid>
    );
}

