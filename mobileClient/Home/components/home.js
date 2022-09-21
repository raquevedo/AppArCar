import * as React from 'react';
import { View, Button } from 'react-native';
import { AuthContext } from '../../Services/context'


function HomeScreen({navigation}){
    const { signOut } = React.useContext(AuthContext);
    
      return(
        <View>
          <Button title="Editar perfil" onPress={() => navigation.navigate("EditProfile")} />
          <Button title="Automoviles" onPress={() => navigation.navigate("Cars")} />
          <Button title="Sign out" onPress={() => signOut({})} />
      </View>
      );
    
    
}

export default HomeScreen;