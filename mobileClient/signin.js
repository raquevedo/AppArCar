import  * as React from 'react';
import { View, TextInput, Button, Text, StyleSheet} from 'react-native';
import { AuthContext } from './context'

function SignInScreen({navigation}) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
  
    const { signIn } = React.useContext(AuthContext);
  
    return (
      <View>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Sign in" onPress={() => signIn({ email, password })} />
        <View style={styles.centered}>
          <Text style={{ color:"blue", width: 100, height: 20}} onPress={() => navigation.navigate('SignUp')}>Registrarse</Text>
        </View>
      </View>
    );
  }
  export default SignInScreen;

  const styles = StyleSheet.create({
    centered: {
      top:'50%',
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  });