import fetchToken from '../utils/fetchToken';

function buildHeaders() {
  let myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + fetchToken());
  myHeaders.append('Content-Type', 'application/json');

  return myHeaders;
}

export async function newParking(parkingData) {
  const myHeaders = buildHeaders();

  return await fetch('http://localhost:8000/parking/parking/create', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(parkingData)
  });
}

export async function getParkingData() {
  const myHeaders = buildHeaders();

  return await fetch('http://localhost:8000/parking/parking', {
    headers: myHeaders
  });
}

export async function getReservations(id) {
  const myHeaders = buildHeaders();

  return await fetch(`http://localhost:8000/parking/reservation/parking/${id}`, {
    headers: myHeaders
  });
}

export async function postCheckIn(id) {
  const myHeaders = buildHeaders();

  return await fetch(`http://localhost:8000/parking/reservation/checkin/${id}`, {
    method: 'POST',
    headers: myHeaders
  });
}

export async function postCheckOut(id) {
  const myHeaders = buildHeaders();

  return await fetch(`http://localhost:8000/parking/reservation/checkout/${id}`, {
    method: 'POST',
    headers: myHeaders
  });
}

export async function getParkingSettings(id) {
  const myHeaders = buildHeaders();

  return await fetch(`http://localhost:8000/parking/parking-settings/${id}`, {
    headers: myHeaders
  });
}

export async function patchParkingSettings(id, settings) {
  const myHeaders = buildHeaders();

  return await fetch(`http://localhost:8000/parking/parking-settings/${id}`, {
    method: 'PATCH',
    headers: myHeaders,
    body: JSON.stringify(settings)
  });
}