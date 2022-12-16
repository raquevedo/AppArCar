import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';
import host_instance from '../../host_instance.json';

async function GetCars(){
    const userToken = await SecureStore.getItemAsync('tk');
    const fetchData={}
    fetchData.method= 'GET'
    fetchData.headers={
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+userToken
        }
    console.log(fetchData)
    return fetch(host_instance.path+'/user/cars',fetchData).then(function(response){
        if(response.status != 200){
            Alert.alert('Sorry', 'Internal error')
        }else{
            return response;
        }
    });
}
async function PersistCar(data){
    const userToken = await SecureStore.getItemAsync('tk');
    data.productionYear=parseInt(data.productionYear)
    const fetchData={}
    fetchData.method= 'POST'
    fetchData.body= JSON.stringify(data)
    fetchData.headers={
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+userToken
        }
    return fetch(host_instance.path+'/user/cars/create',fetchData)
    .then(async function(response){
        if(response.status != 200){
            Alert.alert('Sorry', 'Internal error')
        }else{
            Alert.alert('Greate','Your car was registered.')
            return response;
        }
    }).catch(()=>Alert.alert('Problem connetion'))
}
async function UpdateCar(data){
    const userToken = await SecureStore.getItemAsync('tk');
    data.productionYear=parseInt(data.productionYear)
    const id=parseInt(data.id)
    delete data.id
    const fetchData={}
    fetchData.method= 'PATCH'
    fetchData.body= JSON.stringify(data)
    fetchData.headers={
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+userToken
        }
    console.log(fetchData)
    return fetch(host_instance.path+'/user/cars/update-car/'+id,fetchData)
    .then(async function(response){
        if(response.status != 204){
            Alert.alert('Sorry', 'Internal error')
        }else{
            Alert.alert('Greate','Your car was updated')
        }
    })
}
async function DeleteCar(id){
    console.log(id)
    const userToken = await SecureStore.getItemAsync('tk');
    const fetchData={}
    fetchData.method= 'DELETE'
    fetchData.headers={
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+userToken
        }
    console.log(fetchData)
    return fetch(host_instance.path+'/user/cars/remove/'+id,fetchData).then(function(response){
        if(response.status != 204){
            Alert.alert('Sorry', 'Internal error')
        }else{
            Alert.alert('Success','Your car was deleted')
        }
    }).catch(()=>Alert.alert('Problem connetion'));
}
export { GetCars, PersistCar, DeleteCar, UpdateCar}