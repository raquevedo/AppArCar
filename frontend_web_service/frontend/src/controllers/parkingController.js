import fetchToken from '../../utils/fetchToken';

export async function newParking(parkingData) {
    let myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + fetchToken());
    myHeaders.append('Content-Type', 'application/json');
  
    return fetch('http://localhost:8000/parking/parking/create', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(parkingData)
    })
      .then(data => data.json())
  }
  