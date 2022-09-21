import * as SecureStore from 'expo-secure-store';
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
    return fetch(host_instance.path+'/user/cars',fetchData)
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
    fetch(host_instance.path+'/user/cars/create',fetchData)
    .then(async function(response){
        if(response.status != 200){
        console.log("Error")
        alert("Error, por favor verifique los datos ingresados")
        }else{
        console.log('Create car is success')
        alert('Su auto fue cargado')
        
        }
    })
}


export { GetCars, PersistCar }