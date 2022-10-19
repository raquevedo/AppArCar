import {useContext, useState, useEffect} from "react";
import { StyleSheet, View, Text, Modal, Pressable,TouchableOpacity } from "react-native";
import { AuthContext } from "../../Services/context";
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { SearchBar, Badge } from 'react-native-elements';
import { GetCars } from "../controllers/car_controller";
import { useIsFocused } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import styles from "../../Services/styles";


function HomeScreen({ navigation }) {
  //const { signOut } = useContext(AuthContext);
  const [location, setLocation] = useState(null);
  const [search, setSearch] = useState("")
  const [modalVisible, setModalVisible] = useState(false); 
  const [cars, setCars] = useState([]);
  const [patent,setPatent] = useState("Add car");
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
          setPatent('Add car');
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
            containerStyle={{height: 70, width:400}}
            onSubmitEditing={()=>console.log('busca', search)}
          />
          <TouchableOpacity style={styles.buttonPatent} onPress={() => setModalVisible(true)}>
            <Text style={styles.textPatent}>{patent}</Text>
          </TouchableOpacity>
          
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

