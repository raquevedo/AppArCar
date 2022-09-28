import host_instance from '../host_instance'
import * as SecureStore from 'expo-secure-store';

async function IsRegisteredFunc(token){
  const fetchData2={}
  fetchData2.method= 'GET'
  fetchData2.headers={
    'accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization':'Bearer '+token
  }
  console.log(fetchData2)
  //fetchData2.headers.Authorization='Bearer '+token
  const response = await fetch(host_instance.path+'/user/car-drivers/user-info',fetchData2)
  const resData = await response.json()
  if(resData.isRegister){
    console.log('registrado')
    return true
  }else{
    console.log('no registrado')
    return false
  }
}
async function GetUserInfo(){
  const token = await SecureStore.getItemAsync('tk');
  const fetchData={}
  fetchData.method= 'GET'
  fetchData.headers={
    'accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization':'Bearer '+token
  }
  return fetch(host_instance.path+'/user/car-drivers/user-info',fetchData)
}
export { GetUserInfo, IsRegisteredFunc }