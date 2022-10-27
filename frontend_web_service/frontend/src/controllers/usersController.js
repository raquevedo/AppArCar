import fetchToken from '../utils/fetchToken';

export async function getPartnerData() {
  let myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + fetchToken());
  myHeaders.append('Content-Type', 'application/json');

  let response = await fetch('http://localhost:8000/user/partners/user-info', {
    method: 'GET',
    headers: myHeaders
  });
  response = await response.json();
  return response
}

export async function registerUser(partnerData) {
  let myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + fetchToken());
  myHeaders.append('Content-Type', 'application/json');

  return fetch('http://localhost:8000/user/partners/create-user', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(partnerData)
  })
    .then(data => data.json())
}

export async function updateUser(partnerData) {
  let myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + fetchToken());
  myHeaders.append('Content-Type', 'application/json');

  return fetch('http://localhost:8000/user/partners/update-user', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(partnerData)
  })
    .then(data => data.json())
}

//ParkingUser
export async function getParkingData() {
  let myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + fetchToken());
  myHeaders.append('Content-Type', 'application/json');

  let response = await fetch('http://localhost:8000/user/parking-user/user-info', {
    method: 'GET',
    headers: myHeaders
  });
  response = await response.json();
  return response
}

export async function registerParking(parkingData) {
  let myHeaders = new Headers();  
  myHeaders.append('Authorization', 'Bearer ' + fetchToken());
  myHeaders.append('Content-Type', 'application/json');

  return fetch('http://localhost:8000/user/parking-user/create', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(parkingData)
  })
    .then(data => data.json())
} 

export async function updateParking(parkingData) {
  let myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + fetchToken());
  myHeaders.append('Content-Type', 'application/json');

  return fetch('http://localhost:8000/user/parking-user/update-profile', {
    method: 'PATCH',
    headers: myHeaders,
    body: JSON.stringify(parkingData)
  })
    .then(data => data.json())
}
