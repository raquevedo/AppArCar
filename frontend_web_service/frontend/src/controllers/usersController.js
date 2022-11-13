import {buildHeaders} from './utils';

export async function getPartnerUser() {
  
  const myHeaders = buildHeaders();
  
  let response = await fetch('http://localhost:8000/user/partners/user-info', {
    method: 'GET',
    headers: myHeaders
  });
  response = await response.json();
  return response
}

export async function registerPartnerUser(partnerData) {
  
  const myHeaders = buildHeaders();
  
  return fetch('http://localhost:8000/user/partners/create-user', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(partnerData)
  })
    .then(data => data.json())
}

export async function updatePartnerUser(partnerData) {
  
  const myHeaders = buildHeaders();
  
  return fetch('http://localhost:8000/user/partners/update-user', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(partnerData)
  })
    .then(data => data.json())
}

//ParkingUser
export async function getParkingUser() {
  
  const myHeaders = buildHeaders();
  
  return await fetch('http://localhost:8000/user/parking-user/user-info', {
    method: 'GET',
    headers: myHeaders
  });
}

export async function registerParkingUser(parkingData) {
  
  const myHeaders = buildHeaders();
  
  return fetch('http://localhost:8000/user/parking-user/create', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(parkingData)
  })
    
} 

export async function updateParkingUser(parkingData) {
  
  const myHeaders = buildHeaders();
  
  return fetch('http://localhost:8000/user/parking-user/update-profile', {
    method: 'PATCH',
    headers: myHeaders,
    body: JSON.stringify(parkingData)
  })
    
}
