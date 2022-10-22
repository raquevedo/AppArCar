import fetchToken from "../utils/fetchToken";

export async function newParking(parkingData) {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + fetchToken());
  myHeaders.append("Content-Type", "application/json");

  const data = await fetch("http://localhost:8000/parking/parking/create", {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(parkingData),
  });
  return await data.json();
}

export async function updateParking(id, parkingData) {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + fetchToken());
  myHeaders.append("Content-Type", "application/json");

  const data = await fetch(`http://localhost:8000/parking/parking/update/${id}`, {
    method: "PATCH",
    headers: myHeaders,
    body: JSON.stringify(parkingData),
  });
  return await data.json();
}


export async function getParkingData() {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + fetchToken());
  myHeaders.append("Content-Type", "application/json");
  const data = await fetch("http://localhost:8000/parking/parking", {
    headers: myHeaders,
  });
  return await data.json();
}

export async function getParkingStatusID(id) {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + fetchToken());
  myHeaders.append("Content-Type", "application/json");
  let response = await fetch(
    `http://localhost:8000/parking/parking-status/${id}`,
    {
      headers: myHeaders,
    }
  );
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  response = await response.json();
  return response
}


export async function getParkingDataID(id) {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + fetchToken());
  myHeaders.append("Content-Type", "application/json");
  const data = await fetch(
    `http://localhost:8000/parking/parking/${id}`,
    {
      headers: myHeaders,
    }
  );
  return await data.json();
}
