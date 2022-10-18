import * as React from "react";
import { View,Image } from "react-native";
import { AuthContext } from "./Services/context";
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import HomeScreen from './Home/components/home'
import Cars from './Home/components/cars'
import Profile from './Home/components/profile'

const Drawer = createDrawerNavigator();

function NavBar() {
  const { signOut } = React.useContext(AuthContext);

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Sign Out"
          onPress={() => signOut({})}
        />
      </DrawerContentScrollView>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{headerTintColor: '#FFFFFF'}}
      >
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Cars" component={Cars} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </View>
  );
}

export default NavBar;
