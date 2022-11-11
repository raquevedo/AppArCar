export function fetchToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

export function deleteToken() {
    sessionStorage.removeItem('token');
}