import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './home';
import SignInScreen from './signin';
import SignUpScreen from './signup';
import FormReg from './registry';
import { AuthContext } from './contexto';

//const AuthContext = React.createContext();
//AuthContext.displayName = 'authcon';

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  const [registro, setRegistro] = React.useState(false);
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
        userToken = await SecureStore.getItemAsync('userToken');
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
        
        
          //dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
          try {
            //registrado
            //const response = await fetch('https://mocki.io/v1/5a826b7c-79c6-4af1-9718-035c9436428a');
            //no registrado
            //const response = await fetch('https://mocki.io/v1/c7d2ed2b-98c0-4e02-8e4b-909231d58162');
            
            if(data.username == "Registrado"){
              const response = await fetch('https://mocki.io/v1/5a826b7c-79c6-4af1-9718-035c9436428a');
              const dataRes = await response.json();
              setRegistro(dataRes.registrado);
              dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
              console.log('\nusuario:'+data.username+'\ncontraseña: '+data.password)
            }
            else if(data.username == "Noregistrado"){
              const response = await fetch('https://mocki.io/v1/c7d2ed2b-98c0-4e02-8e4b-909231d58162');
              const dataRes = await response.json();
              setRegistro(dataRes.registrado);
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
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token
        //
        // Cambiar por trycatch que responda a códigos no 200
        //
        if(data.email == "existente@existente"){ 
          Alert.alert("Ya existe una cuenta con este correo electronico");
        }else{
        console.log('\nusuario:'+data.username+'\ncontraseña: '+data.password+'\nemail: '+data.email)
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
        }
      },
      registroOk: async(data) => {
        setRegistro(data.registro);
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
          {registro ? (
            <>
              <Stack.Screen name="Home" component={HomeScreen}/>
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

            
/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
