import fetchToken from '../utils/fetchToken';

export async function getPartnerData() {
  let myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + fetchToken());
  myHeaders.append('Content-Type', 'application/json');

  let response = await fetch('http://0.0.0.0:8000/user/partners/user-info', {
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

  return fetch('http://0.0.0.0:8000/user/partners/create-user', {
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

  return fetch('http://0.0.0.0:8000/user/partners/update-user', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(partnerData)
  })
    .then(data => data.json())
}