import * as SecureStore from 'expo-secure-store';
import host_instance from '../../host_instance.json';

async function payOut(data){
    
    const userToken = await SecureStore.getItemAsync('tk');
    const fetchData={}
    fetchData.method= 'POST'
    fetchData.body= JSON.stringify(data)
    fetchData.headers={
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+userToken
        }
    return fetch(host_instance.path+'/payments/payments',fetchData)
    .then(async function(response){
        if(response.status != 200){
        console.log("Error")
        alert("Transaction error. Please contact with AppArCar call center.")
        }else{
        console.log('Payment success')
        }
    })
}

export { payOut }