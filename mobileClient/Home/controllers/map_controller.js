import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';
import host_instance from '../../host_instance.json';

async function getCoordinates(address){
    const fetchData={}
    fetchData.method= 'GET'
    fetchData.headers={
        'Content-Type': 'application/json'
        }
    const response = await fetch(host_instance.path+'/geo/coordinates/'+address,fetchData).catch(()=>Alert.alert('Ups','Connection error'));
    if(response.status === 200){
      return response.json();
    }else{
      return -1;
    }
  }
  async function getNearParkings(coordinates){
    const userToken = await SecureStore.getItemAsync('tk');
    const fetchData={}
    fetchData.method= 'GET'
    fetchData.headers={
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+userToken
    }
    return fetch(host_instance.path+`/parking/parking/nearest/latitude=${coordinates.latitude}/longitude=${coordinates.longitude}/kilometers=2`,fetchData).then((response)=>{
      if(response.status!=200){
        Alert.alert('Sorry','Internal error');
      }else{
        return response;
      }
    }).catch(()=>{Alert.alert('Ups','Connection error on map')});
    
  }
export {getCoordinates, getNearParkings}
