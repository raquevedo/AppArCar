import {useContext, useState, useEffect} from "react";
import { StyleSheet, View, Text, Modal, Pressable } from "react-native";
import { AuthContext } from "../../Services/context";
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { SearchBar, Badge } from 'react-native-elements';
import { GetCars } from "../controllers/car_controller";
import { useIsFocused } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";

function HomeScreen({ navigation }) {
  //const { signOut } = useContext(AuthContext);
  const [location, setLocation] = useState(null);
  const [search, setSearch] = useState("")
  const [modalVisible, setModalVisible] = useState(false); 
  const [cars, setCars] = useState([]);
  const [patent,setPatent] = useState("Select patent");
  const focus = useIsFocused();

  async function isExistentPatent(){
    const storedPatent = await SecureStore.getItemAsync("patent");
    const response = await GetCars();
    const thisCars = await response.json();
    if(storedPatent != null){
      for(const index in thisCars){
        if(thisCars[index].patentId === storedPatent){
          return true
        }
      }
      return false
    }
  }

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
    useEffect(() => {
      console.log(focus);
      const getCars = async () => {
        const response = await GetCars();
        const resData = await response.json();
        console.log(resData);
        setCars(resData);
      };
      if (focus) {
        getCars();
      }
    }, [focus]);
    
    useEffect(() => {
      const validatePatent = async () => {
        const storedPatent = await SecureStore.getItemAsync("patent");
        const validPatent= await isExistentPatent()
        if(storedPatent != null && validPatent){
          setPatent(storedPatent);
        }else{
          setPatent('Select patent');
        }
      };
      validatePatent();
    }, [focus]);

    let text = 'Waiting..';
    if (location===null) {
      return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"}}>
        <Text>{text}</Text>
      </View>)
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
          <SearchBar 
            placeholder="Type Here..."
            onChangeText={setSearch}
            value={search}
            platform="defaullt"
            round="true" 
            lightTheme="true"
            onSubmitEditing={()=>console.log('busca', search)}
          />
          <Badge value={patent} status="primary" onPress={() => setModalVisible(true)} />
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                {cars.map((item) => 
                  <Text key={item.patentId} 
                        onPress={async ()=> setPatent(item.patentId) & await SecureStore.setItemAsync("patent", item.patentId) & setModalVisible(!modalVisible) }>
                          {item.patentId}
                  </Text> 
                )}
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
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
      right: 5,
      marginTop: 40,
      borderRadius: 20,
  },
    input: {
        height: 48,
        padding: 10,
        marginTop: 60,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#48BBEC',
        backgroundColor: 'white',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        position: 'absolute', 
    },
    modalView: {
        margin: 130,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
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
