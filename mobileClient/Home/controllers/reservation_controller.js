import * as SecureStore from 'expo-secure-store';
import host_instance from '../../host_instance.json';


  async function reserve(idParking){
    const userToken = await SecureStore.getItemAsync('tk');
    const fetchData={}
    fetchData.method= 'POST'
    fetchData.body={
        'idParking':parseInt(idParking)
    }
    fetchData.headers={
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+userToken
    }
    const response = await fetch(host_instance.path+'/parking/reservation/create',fetchData)
    //const response = await fetch(host_instance.path+'/parking/parking/nearest/latitude='+parseFloat(coordinates.latitude)+'/longitude='+parseFloat(coordinates.longitude)+'/kilometers=1',fetchData)
    console.log(response)
    return response.json()
  }
export { reserve }