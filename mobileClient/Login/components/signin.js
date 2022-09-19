import  * as React from 'react';
import { View, Button, Text, StyleSheet,Image} from 'react-native';
import { AuthContext } from '../../Services/context'
import styles from '../../Services/styles';
import { TextInput } from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';

function SignInScreen({navigation}) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    const { signIn } = React.useContext(AuthContext);
  
    return (
      <LinearGradient colors={['#3043ff','#df3ac4']} style={styles.linearGradient}>
          
            <Image source={require('../../assets/logo.png')}  style={styles.image}/>
            
            <View style={styles.section}>
                <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}></View>
                <Text style={styles.themetext} >Hello!</Text>
                <TextInput
                  placeholder="Email"
                  value={email}
                  style={styles.text}
                  onChangeText={setEmail}
                  
                  right={<TextInput.Icon icon="email" />}
                />
                <TextInput
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                  style={styles.text}
                  right={<TextInput.Icon icon="lock" />}
                />
                
                  <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3043ff','#df3ac4']} style={styles.buttonstylel}>
                    <Text style={styles.buttonTextl} onPress={() => signIn({ email, password })}>Login</Text>
                  </LinearGradient>
                  <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}></View>
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

 