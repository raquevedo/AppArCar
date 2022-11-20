import * as SecureStore from 'expo-secure-store';
import host_instance from '../../host_instance.json';
import { Alert } from "react-native";

async function reserve(idParking){
  const userToken = await SecureStore.getItemAsync('tk');
  const fetchData = {}
  const storedPatent = await SecureStore.getItemAsync("patent");
  fetchData.method = 'POST'
  fetchData.body = {
      'idParking':parseInt(idParking),
      'patentId':storedPatent
  }
  fetchData.body=JSON.stringify(fetchData.body)
  fetchData.headers={
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+userToken
  }
  const response = await fetch(host_instance.path+'/parking/reservation/create',fetchData)
  //const response = await fetch(host_instance.path+'/parking/parking/nearest/latitude='+parseFloat(coordinates.latitude)+'/longitude='+parseFloat(coordinates.longitude)+'/kilometers=1',fetchData)
  console.log(response)
  if(response.status === 200){
    Alert.alert('Great', 'Parking is proccesing your reservation, please wait.');
  }else{
    Alert.alert("Reservation error.")
  }
  return response.json()
}

async function reservationExtend(idReservation){
  const userToken = await SecureStore.getItemAsync('tk');
  const fetchData = {}
  fetchData.method = 'POST'
  fetchData.headers={
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+userToken
  }
  const response = await fetch(host_instance.path+'/parking/reservation/extend/'+idReservation,fetchData)
  console.log(response)
  if(response.status === 204){
    Alert.alert('Operation complete', 'Your stay was extended.');
  }else{
    Alert.alert("Reservation error.")
  }
}
export { reserve, reservationExtend }