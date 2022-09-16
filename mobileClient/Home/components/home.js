import * as React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { AuthContext } from '../../Services/context'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}){
    const { signOut } = React.useContext(AuthContext);
    
      return(
        <View>
          <Button title="Editar perfil" onPress={() => navigation.navigate("EditProfile")} />
          <Button title="Sign out" onPress={() => signOut({})} />
      </View>
      );
    
    
}

export default HomeScreen;