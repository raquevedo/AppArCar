import fetchToken from '../utils/fetchToken';

export function buildHeaders() {
  let myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + fetchToken());
  myHeaders.append('Content-Type', 'application/json');

  return myHeaders;
}
