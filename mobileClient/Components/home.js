import * as React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
<<<<<<< HEAD:mobileClient/Components/home.js
import { AuthContext } from '../context'
=======
import { AuthContext } from '../../Services/context'
>>>>>>> dcc6a522dad7d257cca72244580342802a95a0ac:mobileClient/Home/components/home.js
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