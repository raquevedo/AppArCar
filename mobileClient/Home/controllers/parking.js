import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';
import host_instance from '../../host_instance.json';

async function getParkingInfo(idParking){
    try{
    const userToken = await SecureStore.getItemAsync('tk');
    const fetchData={}
    fetchData.method= 'GET'
    fetchData.headers={
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+userToken
        }
    console.log(fetchData)
    return fetch(host_instance.path+'/parking/parking/'+idParking,fetchData).then(function(response){
        if(response.status!=200){
            Alert.alert('Sorry','Internal error');
        }else{
            return response;
        }
    }).catch(function(){
        Alert.alert('Ups','Connection problems')
    });
    }catch(err){
        console.log(err);
    }
}

export { getParkingInfo }