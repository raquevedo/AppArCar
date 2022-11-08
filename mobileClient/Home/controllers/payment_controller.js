import * as SecureStore from 'expo-secure-store';
import host_instance from '../../host_instance.json';

async function payOut(data){
    
    //console.log(data);
    //const idCardNumber=getSelectedPayment()
 
    console.log(data);
    //clearPaymentContext();
    /*const userToken = await SecureStore.getItemAsync('tk');
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
    })*/
}

export { payOut }