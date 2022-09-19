import  * as React from 'react';
import { View, Button,Image,Text} from 'react-native';
import { AuthContext } from '../../Services/context'
import {LinearGradient} from 'expo-linear-gradient';
import { TextInput } from 'react-native-paper';
import styles from '../../Services/styles';

function SignUpScreen({navigation}) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
  
    const { signUp } = React.useContext(AuthContext);  

    return (
      <LinearGradient colors={['#3043ff','#df3ac4']} style={styles.linearGradient}>
        <Image source={require('../../assets/logo.png')} style={styles.image}/>
        <View style={styles.section}>
          <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}></View>
          <Text style={styles.themetext} >Sign Up</Text>
            <TextInput
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
              style={ styles.text}
              left={<TextInput.Icon icon="eye" />}
            />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={ styles.text}
              left={<TextInput.Icon icon="email" />}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={ styles.text}
              left={<TextInput.Icon icon="lock" />}
            />
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#3043ff','#df3ac4']} style={styles.buttonstyle}>
                  <Text style={styles.buttonText} onPress={() => signUp({ username, password, email }) & navigation.goBack()}>Sign up</Text>
            </LinearGradient>
            <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}></View>
          </View>
          <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}></View>
      </LinearGradient>
    );
  }
  export default SignUpScreen;
