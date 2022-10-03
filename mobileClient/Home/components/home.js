import * as React from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { AuthContext } from "../../Services/context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "../../Services/styles";

function HomeScreen({ navigation }) {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/iniciogoogle.png")}
        resizeMode="cover"
        style={styles.imageGoogle}
      >
        <View style={styles.containButtonHome}>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => navigation.navigate("EditProfile")}
           >
            <Image
              style={styles.imageButton}
              source={require("../../assets/profile.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => navigation.navigate("Cars")}
           >
            <Image
              style={styles.imageButton}
              source={require("../../assets/car.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => signOut({})}
           >
            <Image
              style={styles.imageButton}
              source={require("../../assets/signout.png")}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

export default HomeScreen;
