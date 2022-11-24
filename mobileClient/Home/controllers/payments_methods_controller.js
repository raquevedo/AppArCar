import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';
import host_instance from '../../host_instance.json';

async function getPaymentMethods(){
    const userToken = await SecureStore.getItemAsync('tk');
    const fetchData={}
    fetchData.method= 'GET'
    fetchData.headers={
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+userToken
        }
    console.log(fetchData)
    
    return fetch(host_instance.path+'/payments/card',fetchData).then(function(response){
        if(response.status!=200){
            Alert.alert('Ups','Unestable connection. Please try again on a few seconds.');
        }else{
            return response;
        }
    });
}
async function persistCreditCard(data){
    const userToken = await SecureStore.getItemAsync('tk');
    data.expireDate=parseInt((data.expireDate.getMonth()+1).toString()+data.expireDate.getFullYear().toString())
    const fetchData={}
    fetchData.method= 'POST'
    fetchData.body= JSON.stringify(data)
    fetchData.headers={
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+userToken
        }
    return fetch(host_instance.path+'/payments/card',fetchData)
    .then(async function(response){
        if(response.status != 200){
        console.log("Error")
        alert("Error, please check data inputs")
        }else{
        console.log('Create car is success')
        alert('Your credit card was registered.')
        
        }
    })
}
async function deleteCreditCard(id){
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
    return fetch(host_instance.path+'/payments/card/'+id,fetchData)
}
export { getPaymentMethods, persistCreditCard, deleteCreditCard }