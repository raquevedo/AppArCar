import { buildHeaders } from './utils';

export async function logUserIn(credentials) {
  const myHeaders = buildHeaders();
  
  return fetch("http://localhost:8000/auth/users/login", {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(credentials),      
  })
}

