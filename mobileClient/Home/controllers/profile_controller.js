import * as SecureStore from 'expo-secure-store';
import host_instance from '../../host_instance.json';

async function PersistProfile(data){
    const userToken = await SecureStore.getItemAsync('tk');
    data.documentNumber=parseInt(data.documentNumber)
    data.contactNumber=parseInt(data.contactNumber)
    const fetchData={}
    fetchData.method= 'PATCH'
    fetchData.body= JSON.stringify(data)
    fetchData.headers={
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+userToken
        }
    data.documentNumber=parseInt(data.documentNumber)
    data.contactNumber=parseInt(data.contactNumber)
    return fetch(host_instance.path+'/user/car-drivers/update-profile',fetchData)
    .then(async function(response){
        if(response.status != 204){
            console.log("Error")
            Alert.alert('Sorry', 'Internal error')
        }else{
            console.log('Update profile is success')
            Alert.alert('Yes','Your data was updated')
        }
    })
}

export { PersistProfile }