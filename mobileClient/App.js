import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/home';
import SignInScreen from './Components/signin.js';
import SignUpScreen from './Components/signup.js';
import FormReg from './Components/registry.js';
import Profile from './Components/profile.js';
import { AuthContext } from './context.js';


const Stack = createNativeStackNavigator();
async function isRegisteredFunc(token){
  
  const fetchData2={}
  fetchData2.method= 'GET'
  fetchData2.headers={
    'accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization':'Bearer '+token
  }
  console.log(fetchData2)
  //fetchData2.headers.Authorization='Bearer '+token
  const response = await fetch('http://192.168.0.19:8000/user/car-drivers/user-info',fetchData2)

  
  if(response.status == 200){
    console.log('registrado')
    return true
  }else{
    console.log('no registrado')
    return false
  }
  
}


export default function App({navigation}) {
  const [isRegistered, setIsRegistered] = React.useState(false);
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync('tk');
        const registro_boolean = await isRegisteredFunc(userToken)
        console.log(registro_boolean)
        console.log(userToken)
        if(userToken != null){
          console.log('Token status: available')
          setIsRegistered(registro_boolean)
        }else{
          console.log('Token status: empty')
        }
      } catch (e) {
        // Restoring token failed
      }

      
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
      //Habilitar ambas para resetear localstorge
      //dispatch({ type: 'SIGN_OUT' })
      //await SecureStore.deleteItemAsync('tk')
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signUp: async (data) => {
        
        //Armo los datos que serán enviados en la request
        const fetchData={}
        fetchData.method= 'POST'
        fetchData.body= JSON.stringify(data)
        fetchData.headers={
            'accept': 'application/json',
            'Content-Type': 'application/json'
          }
        //Hago el request a signup
        console.log(fetchData)
        fetch('http://192.168.0.19:8000/auth/signup',fetchData)
        .then(async function(response){
          if(response.status != 200){
            alert("Internal error")
          }else{
            const dataRes = await response.json();
            console.log('SignaUp OK')
            //console.log('Response header:',response)
            alert("Credenciales aceptadas, por favor inicie sesión")
          }
        })
      },
      signIn: async (data) => {
          try {
            //Armo los datos que serán enviados en la request
            const fetchData={}
            fetchData.method= 'POST'
            fetchData.body= JSON.stringify(data)
            fetchData.headers={
                'accept': 'application/json',
                'Content-Type': 'application/json'
              }
            //Hago el request a login
            fetch('http://192.168.0.19:8000/auth/users/login',fetchData)
            .then(async function(response){
              const dataRes = await response.json()
              if(response.status == 422){
                console.log("Status response:",response.status)
                alert("Credenciales invalidas longitud")
              }else if(response.status == 401){
                console.log("Status response:",response.status)
                alert("Credenciales invalidas")
              }else if(response.status == 200){
                const isReg= await isRegisteredFunc(dataRes.token)
                dispatch({ type: 'SIGN_IN', token: dataRes.token });
                await SecureStore.setItemAsync('tk', dataRes.token);
                if(!isReg){
                  console.log("Completar registro")
                }else{
                  console.log("Go to home")
                  setIsRegistered(true)
                  //guardar datos para perfil ??
                }
              }else{
                //const dataRes = await response.json();
                console.log(dataRes)
                alert("error interno")
              }
            })
          } catch (error) {
            console.error("error error:",error);
          }
      },
      signOut: async() => {
        dispatch({ type: 'SIGN_OUT' })
        await SecureStore.deleteItemAsync('tk')
      },
      register: async(data) => {
        const userToken = await SecureStore.getItemAsync('tk');
        
        //data.birthDateDt="2022-09-14T18:03:44.163Z"
        data.documentNumber=parseInt(data.documentNumber)
        data.contactNumber=parseInt(data.contactNumber)
        const fetchData={}
        fetchData.method= 'POST'
        fetchData.body= JSON.stringify(data)
        fetchData.headers={
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+userToken
          }
        
        //fetchData.headers.Authorization='Bearer '+userToken
        console.log('Data to register:',fetchData)
        //Hago el request a signup
        fetch('http://192.168.0.19:8000/user/car-drivers/create-user',fetchData)
        .then(async function(response){
          if(response.status != 200){
            console.log("not 200")
          }else{
            const dataRes = await response.json();
            console.log('Registry is success')
            setIsRegistered(true)
            alert('BienVenido a AppArCar')
            
          }
        })
      },
    })  
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          
          {state.userToken == null ? (
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>  
          ) : (
          <>
          {isRegistered ? (
            <>
              <Stack.Screen name="Home" component={HomeScreen}/>
              <Stack.Screen name="EditProfile" component={Profile}/>

           </>  
            ) : (
            <>
              <Stack.Screen name="Registrar" component={FormReg} />
            </>)}
          </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
