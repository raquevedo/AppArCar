import fetchToken from "./fetchToken";

export function isLoggedIn() {
  const token = fetchToken();
  console.log(token);
  if (token === undefined) {
    return false
  }
  return true
}