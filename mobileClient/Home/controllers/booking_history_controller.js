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
    fetch(host_instance.path+'/user/cars/update-car/'+id,fetchData)
    .then(async function(response){
        if(response.status != 204){
        console.log("Error")
        alert("Error, por favor verifique los datos ingresados")
        }else{
        console.log('Create car is success')
        alert('Your car was updated.')
        
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
    await fetch(host_instance.path+'/user/cars/remove/'+id,fetchData)
}
export { getReservations }