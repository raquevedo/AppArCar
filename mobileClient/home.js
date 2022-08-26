import * as React from 'react';
import { View, TextInput, Button } from 'react-native';
import { AuthContext } from './contexto'

function HomeScreen({navigation}){
    const { signOut } = React.useContext(AuthContext);
    return(
      <View>
      
      <Button title="Sign out" onPress={() => signOut()} />
    </View>
    );
}

export default HomeScreen;