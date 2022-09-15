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
        console.log(userToken);
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        
          try {
            if(data.username == "Registrado"){
              //Solicita token
              //const response = await fetch('https://mocki.io/v1/5a826b7c-79c6-4af1-9718-035c946428a');
              const response = await fetch('https://mocki.io/v1/5a826b7c-79c6-4af1-9718-035c9436428a', data);
              
              if(response.status=='200'){
                //nuevo fetch consultando estado registro
                const dataRes = await response.json();
                await SecureStore.setItemAsync('tk', 'dummy-auth-token');
                setIsRegistered(dataRes.registrado);
                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
                console.log('\nusuario:'+data.username+'\ncontraseña: '+data.password)
              }
              else{
                console.log('Credenciales invalidas');
              }
            }
            else if(data.username == "Noregistrado"){
              const response = await fetch('https://mocki.io/v1/c7d2ed2b-98c0-4e02-8e4b-909231d58162');
              const dataRes = await response.json();
              await SecureStore.setItemAsync('tk', 'dummy-auth-token');
              setIsRegistered(dataRes.registrado);
              dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            console.log('\nusuario:'+data.username+'\ncontraseña: '+data.password)
            }else if(data.username == "Error"){
              fetch('0.0.0.0')
              .then(function(response) {console.log('ok')})
              .catch(function(response){alert('Las credecnailes son incorrectas')});
            }else{
              alert("Ingresar nombre de usuraio como Registrado, Noregistrado o Error");
            }
            //setData(json.items);
          } catch (error) {
            console.error(error);
          }
        
        
      },
      signOut: async() => {
        dispatch({ type: 'SIGN_OUT' })
        await SecureStore.deleteItemAsync('tk')
      },
      signUp: async (data) => {
        if(data.email == "existente@existente"){ 
          Alert.alert("Ya existe una cuenta con este correo electronico");
        }else{
          console.log('\nusuario:'+data.username+'\ncontraseña: '+data.password+'\nemail: '+data.email);
          
          Alert.alert("Felicitaciones 'Registrado' su cuenta ha sido activada por favor loguearse para acceder a AppArCar");
        }
      },
      register: async(data) => {
        setIsRegistered(data.registered);
        alert('Aplicación activada');
      }
    }),
    []
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



   