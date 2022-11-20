import * as SecureStore from 'expo-secure-store';
import host_instance from '../../host_instance.json';

async function getParkingInfo(idParking){
    const userToken = await SecureStore.getItemAsync('tk');
    const fetchData={}
    fetchData.method= 'GET'
    fetchData.headers={
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+userToken
        }
    console.log(fetchData)
    return fetch(host_instance.path+'/parking/parking/'+idParking,fetchData)
}

export { getParkingInfo }