import  * as React from 'react';
import { View, TextInput, Button} from 'react-native';
import { AuthContext } from '../Services/context'


function SignUpScreen({navigation}) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
  
    const { signUp } = React.useContext(AuthContext);  

    return (
      <View>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
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
        
        <Button title="Sign up" onPress={() => signUp({ username, password, email }) & navigation.goBack() } />
      </View>
    );
  }
  export default SignUpScreen;
