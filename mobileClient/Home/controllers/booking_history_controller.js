import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';
import host_instance from '../../host_instance.json';
import { GetUserInfo } from "../../Services/requests";

async function getReservations(){
    try{
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
        return fetch(host_instance.path+'/parking/reservation/car-driver/'+idCarDriver,fetchData).then(function(response){
            if(response.status!=200){
                Alert.alert('Sorry','Internal error');
            }else{
                return response;
            }
        }).catch(function(){
            Alert.alert('Ups','Connection errors');
        });
    }catch(err){
        console.log(err);
    }
}

export { getReservations }