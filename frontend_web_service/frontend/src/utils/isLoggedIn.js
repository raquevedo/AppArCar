import { fetchToken } from "./authToken";

export function isLoggedIn() {
  const token = fetchToken();
  if (token === undefined) {
    return false
  }
  return true
}