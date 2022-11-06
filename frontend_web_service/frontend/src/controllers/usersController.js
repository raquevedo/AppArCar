import fetchToken from '../utils/fetchToken';

function buildHeaders() {
  let myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + fetchToken());
  myHeaders.append('Content-Type', 'application/json');

  return myHeaders;
}

export async function getPartnerData() {
  const myHeaders = buildHeaders();

  let response = await fetch('http://localhost:8000/user/partners/user-info', {
    method: 'GET',
    headers: myHeaders
  });
  response = await response.json();
  return response
}

export async function registerUser(partnerData) {
  const myHeaders = buildHeaders();

  return fetch('http://localhost:8000/user/partners/create-user', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(partnerData)
  })
    .then(data => data.json())
}

export async function updateUser(partnerData) {
  const myHeaders = buildHeaders();

  return fetch('http://localhost:8000/user/partners/update-user', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(partnerData)
  })
    .then(data => data.json())
}