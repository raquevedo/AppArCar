import * as React from "react";
import { View } from "react-native";
import { AuthContext } from "./Services/context";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Home/components/home'
import Cars from './Home/components/cars'
import Profile from './Home/components/profile'



const Drawer = createDrawerNavigator();

function NavBar({ navigation }) {
  const { signOut } = React.useContext(AuthContext);

  return (
    
    <View style={{ flex: 1 }}>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Autos" component={Cars} />
        <Drawer.Screen name="Perfil" component={Profile} />
        {/*add signout*/}
        </Drawer.Navigator>
    </View>
  );
}

export default NavBar;
