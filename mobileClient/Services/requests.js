import host_instance from '../host_instance'
import * as SecureStore from 'expo-secure-store';
import { Alert } from 'react-native';

async function IsRegisteredFunc(token){
  if(token!=null){
    const fetchData={}
    fetchData.method= 'GET'
    fetchData.headers={
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+token
    }
    console.log(fetchData)
    //fetchData2.headers.Authorization='Bearer '+token
    const response = await fetch(host_instance.path+'/user/car-drivers/user-info',fetchData);
    const resData = await response.json();
    console.log(token);
    if(resData.isRegister){
      console.log('registrado');
      return true;
    }else{
      console.log('no registrado');
      return false;
    }
  }else{
    console.log('no logueado');
    return false();
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
async function login(data){
  const fetchData = {};
  fetchData.method = "POST";
  fetchData.body = JSON.stringify(data);
  fetchData.headers = {
    accept: "application/json",
    "Content-Type": "application/json",
  };
  //Hago el request a login
  return fetch(host_instance.path + "/auth/users/login", fetchData).then(
    async function (response) {
      if(response.status==401){
        Alert.alert('Sorry','Invalid credentials');
      }else if(response.status==200){
        return response;
      }else{
        Alert.alert('Sorry','Internal error');
      }
  }).catch(function(){
    Alert.alert('Ups','connecion problems');
  });
}
async function sign_up(data){
  const fetchData = {};
  fetchData.method = "POST";
  fetchData.body = JSON.stringify(data);
  fetchData.headers = {
    accept: "application/json",
    "Content-Type": "application/json",
  };
  return fetch(host_instance.path + "/auth/signup", fetchData).then(
    async function (response) {
      if (response.status != 200) {
        Alert.alert('Sorry','Internal error');
      } else {
        return response;
      }
    }
  ).catch(function(){
    Alert.alert('Ups','connecion problems');
  })
}
async function register_ctl(data){
  const userToken = await SecureStore.getItemAsync("tk");
  data.documentNumber = parseInt(data.documentNumber);
  data.contactNumber = parseInt(data.contactNumber);
  const fetchData = {};
  fetchData.method = "POST";
  fetchData.body = JSON.stringify(data);
  fetchData.headers = {
    accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + userToken,
  };
  fetch(
    host_instance.path + "/user/car-drivers/create-user",
    fetchData
  ).then(async function (response) {
    if (response.status != 200) {
      Alert.alert('Sorry','Internal error');
    } else {
      return response;
    }
  }).catch(function(){
    Alert.alert('Ups!','Connetcion error');
  });
}
export { GetUserInfo, IsRegisteredFunc, login, sign_up, register_ctl }