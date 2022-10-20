import * as SecureStore from 'expo-secure-store';
import host_instance from '../../host_instance.json';

async function getCoordinates(address){
    const fetchData={}
    fetchData.method= 'GET'
    fetchData.headers={
        'Content-Type': 'application/json'
        }
    const response = await fetch(host_instance.path+'/geo/coordinates/address='+address,fetchData)
    return response.json()
    /*console.log(respData)
    setRegionMapLat(respData.latitude)
    setRegionMapLon(respData.longitude)*/
  }
  async function getNearParkings(coordinates){
    const userToken = await SecureStore.getItemAsync('tk');
    const fetchData={}
    fetchData.method= 'GET'
    fetchData.headers={
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+userToken
    }
    const response = await fetch(host_instance.path+`/parking/parking/nearest/latitude=${coordinates.latitude}/longitude=${coordinates.longitude}/kilometers=2`,fetchData)
    //const response = await fetch(host_instance.path+'/parking/parking/nearest/latitude='+parseFloat(coordinates.latitude)+'/longitude='+parseFloat(coordinates.longitude)+'/kilometers=1',fetchData)
    return response.json()
  }
export {getCoordinates, getNearParkings}