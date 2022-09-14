import  * as React from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import { AuthContext } from '../context.js';
import {LinearGradient} from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

function SignInScreen({navigation}) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [fontsLoaded] = useFonts({
      'TTNorms-Light': require('../assets/fonts/TTNorms-Light.otf'),
    });
    
    const { signIn } = React.useContext(AuthContext);
  
    return (

      
        <LinearGradient colors={['#3043ff','#df3ac4']} style={styles.linearGradient}>
          <Image source={require('../img/logo.png')} style = {{ width: '60%', height: '11%' }} />
          <View style={[styles.section, {transform: [{ rotate: "30deg" }]}]}></View>
        <View>
            <Text style={styles.themetext} >Hello!</Text>
            <TextInput
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
              style={ styles.text}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={ styles.text}
            />
          
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3043ff','#df3ac4']} style={styles.buttonstyle}>
              <Text style={styles.buttonText} onPress={() => signIn({ username, password })}>></Text>
            </LinearGradient>
          </View>
          <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3043ff','#df3ac4']} style={styles.triangle}></LinearGradient>
          <Text style={styles.buttonTextr} onPress={() => navigation.navigate('SignUp')}>Registrarse</Text>
        </LinearGradient>
      
      );
  }

  const styles = StyleSheet.create({
    themetext: {
      fontSize: 30,
      top: '-120%',
      left: '-13%',
      fontFamily: 'TTNorms-Light',
      textAlign: 'center',
      color: '#5741f2',
      justifyContent: 'center',
      alignItems: 'center'
  },
    centered: {
      top: '50%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  buttonTextr: {
    left: '-34%',
    top: '-29%',
    fontSize: 14,
    fontFamily: 'TTNorms-Light',
    textAlign: 'center',
    margin: 10,
    color: 'white',
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'TTNorms-Light',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonstyle: {
      left: '26%',
      position: "absolute",
      top: '40%',
      borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:50,
       height:50,
       backgroundColor:'transparent',
       borderRadius:50,
  },
  text: {
    top: '-90%',
    fontSize: 25,
    fontFamily: 'TTNorms-Light',
    textAlign: 'center',
    margin: 10,
    color: '#5741f2',
    backgroundColor: 'transparent',
  },
  section: {
    top: '10%',
    borderWidth:1,
     borderColor:'rgba(0,0,0,0.2)',
     alignItems:'center',
     justifyContent:'center',
     width:330,
     height:250,
     backgroundColor:'white',
     borderRadius:40,
},
triangle: {
  left: '-33%',
  top: '-20%',
  width: 0,
  height: 0,
  borderBottomColor: '#5741f2',
  borderTopWidth: 0,
  borderRightWidth: 45,
  borderBottomWidth: 90,
  borderLeftWidth: 45,
  borderTopColor: 'transparent',
  borderRightColor: 'transparent',
  borderLeftColor: 'transparent',
  
  backgroundColor:'transparent',
  transform: [{ rotate: "90deg" }],
  
},
  })
  export default SignInScreen;

  