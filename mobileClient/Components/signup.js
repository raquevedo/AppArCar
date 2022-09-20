import  * as React from 'react';
import { View, TextInput, Button,StyleSheet,Image,Text} from 'react-native';
import { AuthContext } from '../context.js'
import {LinearGradient} from 'expo-linear-gradient';
import styles from './styles';



function sendForm(data,nav){
  
  signUp({data});
  nav.goBack();
}


function SignUpScreen({navigation}) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    
    const { signUp } = React.useContext(AuthContext);  

    return (
      <LinearGradient colors={['#3043ff','#df3ac4']} style={styles.linearGradient}>
        <Image source={require('../img/logo.png')} style={styles.image}/>
        <View style={styles.section}>
        
          <Text style={styles.themetext} >Sign Up</Text>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            style={ styles.text}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
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
            <Text style={styles.buttonText} onPress={() => signUp({ username, password, email }) & navigation.goBack()}>Sign up</Text>
          </LinearGradient>
        </View>
        <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}></View>
      </LinearGradient>
    );
  }
  
  export default SignUpScreen;
  /*sendForm({ username, password, email })*/
  