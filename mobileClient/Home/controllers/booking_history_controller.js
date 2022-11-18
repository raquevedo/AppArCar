import * as SecureStore from 'expo-secure-store';
import host_instance from '../../host_instance.json';
import { GetUserInfo } from "../../Services/requests";

async function getReservations(){
    let response = await GetUserInfo()
    response = await response.json();
    const idCarDriver = response.data.id;
    const userToken = await SecureStore.getItemAsync('tk');
    const fetchData={}
    fetchData.method= 'GET'
    fetchData.headers={
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+userToken
        }
    console.log(fetchData)
    return fetch(host_instance.path+'/parking/reservation/car-driver/'+idCarDriver,fetchData)
}

export { getReservations }