import  * as React from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import { AuthContext } from '../context.js';
import {LinearGradient} from 'expo-linear-gradient';
import styles from './styles';



function SignInScreen({navigation}) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    
    const { signIn } = React.useContext(AuthContext);
  
    return (

      
        <LinearGradient colors={['#3043ff','#df3ac4']} style={styles.linearGradient}>
          
            <Image source={require('../img/logo.png')}  style={styles.image}/>
            
            <View style={styles.section}>
                <Text style={styles.themetext} >Hello!</Text>
                <TextInput
                  placeholder="Username"
                  value={username}
                  onChangeText={setUsername}
                  style={styles.text}
                />
                <TextInput
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                  style={styles.text}
                />
                
                  <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3043ff','#df3ac4']} style={styles.buttonstyle}>
                    <Text style={styles.buttonText} onPress={() => signIn({ username, password })}>Login</Text>
                  </LinearGradient>  
            </View>
            <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
                  <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#df3ac4','#3043ff']} style={styles.buttonstyle}>
                    <Text style={styles.buttonText} onPress={() => navigation.navigate('SignUp')}>Sign up</Text>
                  </LinearGradient>
            </View>
            
        </LinearGradient>
      
      );
  }
  export default SignInScreen;

  