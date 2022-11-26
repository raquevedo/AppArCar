import * as SecureStore from 'expo-secure-store';
import host_instance from '../../host_instance.json';
import { Alert } from "react-native";

async function reserve(idParking) {
  const userToken = await SecureStore.getItemAsync('tk');
  const fetchData = {}
  const storedPatent = await SecureStore.getItemAsync("patent");
  fetchData.method = 'POST'
  fetchData.body = {
    'idParking': parseInt(idParking),
    'patentId': storedPatent
  }
  fetchData.body = JSON.stringify(fetchData.body)
  fetchData.headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + userToken
  }
  return fetch(host_instance.path + '/parking/reservation/create', fetchData).then(function (response) {
    if (response.status != 200) {
      Alert.alert('Sorry', 'Internal error')
    } else {
      Alert.alert('Great', 'Parking is proccesing your reservation, please wait.');
      return response;
    }
  }).catch(() => Alert.alert('Ups!', 'Connection error on reservation'));
}

async function reservationExtend(idReservation) {
  const userToken = await SecureStore.getItemAsync('tk');
  const fetchData = {}
  fetchData.method = 'POST'
  fetchData.headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + userToken
  }
  return fetch(host_instance.path + '/parking/reservation/extend/' + idReservation, fetchData).then(function(response){
    if (response.status != 204) {
      Alert.alert("Reservation error.")
    } else {
      Alert.alert('Operation complete', 'Your stay was extended.');
    }
  }).catch(()=>Alert.alert('Ups!','Connection error on extend reserve'));
}
export { reserve, reservationExtend }