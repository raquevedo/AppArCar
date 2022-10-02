import React from 'react';
import ParkingContainer from '../ParkingContainer/ParkingContainer';
import PopUp from '../PopUp/PopUp';
import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import ParkingAccordion from '../ParkingAccordion/ParkingAccordion';
import fetchToken from '../../utils/fetchToken';


//async function getParking() {
  //let myHeaders = new Headers();
 // myHeaders.append('Authorization', 'Bearer ' + fetchToken());
  //myHeaders.append('Content-Type', 'application/json');

 // let response = await fetch('http://0.0.0.0:8000/parking/parking', {
   // method: 'GET',
   // headers: myHeaders
  //});
  //response = await response.json();
  //return response
//}


export default function Dashboard({ partnerData, setPartnerData }) {


//let parkingData = useRef([]);


const [parkingCount, setParkingCount] = useState();

const Button = styled.button`
background-color: green;
color: white;
font-size: 20px;
padding: 10px 60px;
border-radius: 5px;
margin: 10px 0px;
cursor: pointer;
`;

const [buttonPopup, setButtonPopup] = useState(false);

//useEffect(() => {
 // async function assignPartnerData() {
  //  const response = await getParking();
   // parkingData.current = response.data;
 // }
  //assignPartnerData();
//}, [])

  return(
    <div className='grid-container'>
      <div className='grid-y'>
        <div className='cell'>
          {//<ParkingContainer />

}
            <div className="title"><h1> Your Parkings: </h1></div>
            
            <div><ParkingAccordion /></div>
            <div className='add-button'>
                <Button onClick={() => setButtonPopup(true)}>
                    + Add Parking
                </Button>
                    <div>
                    <PopUp trigger={buttonPopup} setTrigger={setButtonPopup} setParkingCount={setParkingCount} parkingCount={parkingCount} />
                </div>
                </div>
         </div>
         </div>
    </div>

  );

}