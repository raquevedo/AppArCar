import { buildHeaders } from './utils';

export async function newParking(parkingData) {
  const myHeaders = buildHeaders();

  return await fetch('http://localhost:8000/parking/parking/create', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(parkingData)
  });
}

export async function updateParking(parkingId, parkingData) {
  const myHeaders = buildHeaders();

  return await fetch(`http://localhost:8000/parking/parking/update/${parkingId}`, {
    method: 'PATCH',
    headers: myHeaders,
    body: JSON.stringify(parkingData)
  })
}

export async function getParkingData() {
  const myHeaders = buildHeaders();

  return await fetch('http://localhost:8000/parking/parking', {
    headers: myHeaders
  });
}

export async function getParkingById(parkingId) {
  const myHeaders = buildHeaders();

  return await fetch(`http://localhost:8000/parking/parking/${parkingId}`, {
    headers: myHeaders
  });
}

export async function deleteParking(parkingId) {
  const myHeaders = buildHeaders();

  return await fetch(`http://localhost:8000/parking/parking/${parkingId}`, {
    method: 'DELETE',
    headers: myHeaders
  });
}

export async function getReservations(id) {
  const myHeaders = buildHeaders();

  return await fetch(`http://localhost:8000/parking/reservation/parking/${id}`, {
    headers: myHeaders
  });
}

export async function getAllReservations() {
  const myHeaders = buildHeaders();

  return await fetch('http://localhost:8000/parking/reservation/parking-user', {
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

export async function acceptReservation(id) {
  const myHeaders = buildHeaders();

  return await fetch(`http://localhost:8000/parking/reservation/accept/${id}`, {
    method: 'POST',
    headers: myHeaders
  });
}

export async function rejectReservation(id) {
  const myHeaders = buildHeaders();

  return await fetch(`http://localhost:8000/parking/reservation/reject/${id}`, {
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

export async function getParkingStatusById(parkingId) {
  const myHeaders = buildHeaders();

  return await fetch(`http://localhost:8000/parking/parking-status/${parkingId}`, {
    headers: myHeaders
  });
}
