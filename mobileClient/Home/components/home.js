import {useContext, useState, useEffect} from "react";
import { StyleSheet, View, Text } from "react-native";
import { AuthContext } from "../../Services/context";
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import TInput from './inputExample';

function HomeScreen({ navigation }) {
  const { signOut } = useContext(AuthContext);
  const [location, setLocation] = useState(null);
  console.log(MapView.Marker)
  useEffect(() => {
    (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
        }

        let location = await Location.getCurrentPositionAsync({});
        console.log(location)
        setLocation(location);
    })();
    }, []);

    let text = 'Waiting..';
    if (location===null) {
      return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"}}>
      <Text>Cargando su ubicación</Text>
      </View>)
    } else if (location) {
      console.log("latitud: "+location.coords.latitude+ 'longitud: '+location.coords.longitude)
    }
  return (
    <View style={{ flex: 1 }}>
        <MapView
            style={{ flex: 1, position: 'relative'}}
            initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.010,
            longitudeDelta: 0.016
          }}>
          <MapView.Marker
                  title="yo"
                  description="conductor"
                  coordinate={{"latitude":location.coords.latitude,"longitude":location.coords.longitude}}
                />
          {/*<MapView.Marker coordinate={{latitude:-34.633190, longitude:-58.455946}}/>*/}
        </MapView>
        <View style={styles.inputView}>
          <TInput>
          </TInput>
        </View>
    </View>
  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  inputView: {
    backgroundColor: 'rgba(0,0,0,0)',
      position: 'absolute', 
      top: 0,
      left: 5,
      right: 5
  },
});
/*
**********************Backup de botones flotantes.*******************************

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
*/