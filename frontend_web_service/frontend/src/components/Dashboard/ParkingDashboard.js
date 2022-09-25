import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import ParkingNavbar from "../components/ParkingNavbar";
import 'fontsource-roboto';
import '../assets/css/Dashboard.css';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ParkingHeader from '../components/ParkingHeader';
const useStyles = makeStyles(()=> ({
root: {
    flexGrow: 1
},
icons:{
    color: 'white'
}
}));

function Dashboard(props){
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <ParkingNavbar/>

                </Grid>

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
        </div>
    );
}

export default Dashboard;