import { useState, useEffect, useCallback, useMemo } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { SearchBar} from 'react-native-elements';
import { GetCars } from "../controllers/car_controller";
import { useIsFocused } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import { getCoordinates, getNearParkings } from "../controllers/map_controller";
import {ModalReserve, ModalPatent} from "./mapModals";
import ReservationsSocket from "./reservationsSocket";
import styles from "../../Services/styles";
import { getPaymentMethods } from "../controllers/payments_methods_controller";

function HomeScreen({ navigation }) {
  
  const [location, setLocation] = useState(null);
  const [regionMapLat, setRegionMapLat] = useState("");
  const [regionMapLon, setRegionMapLon] = useState("");
  const [nearParkings,setNearParkings] = useState([]);
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalResVisible, setModalResVisible] = useState(false); 
  const [cars, setCars] = useState([]);
  const [parking, setParking] = useState({});
  const [patent,setPatent] = useState("Select patent");
  const [reserveData, setReserveData]= useState({'visible':false});

  const focus = useIsFocused();

  const wrapperSetModalState = useCallback(val => {
    setModalVisible(val);
  }, [setModalVisible]);
  const wrapperSetResModalState = useCallback(val => {
    setModalResVisible(val);

  }, [setModalResVisible]);
  const wrapperSetPatent = useCallback(val => {
    setPatent(val);
  }, [setPatent]);
  
  async function getSearchCoords(address){
    const coordinates = await getCoordinates(address)
    if(coordinates==-1){
      Alert.alert("Pay atention","The suministred coordinates are invalid.");
    }else{
      console.log(`Coordinates search is success. latitude:${coordinates.latitude} longitude:${coordinates.longitude}`);
      setRegionMapLat(coordinates.latitude)
      setRegionMapLon(coordinates.longitude)
      getThisNearParkings(coordinates)
    }
  }
  async function getThisNearParkings(coordinates){
    const nearParkings = await getNearParkings(coordinates)
    setNearParkings(nearParkings)
    console.log(nearParkings)
  }
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
  function carsFlow(){
    if(cars.length!=0){
      setModalVisible(true)
    }else{
      navigation.navigate('Cars')
    }
  }
  function centerRegion(coordinates){
    setRegionMapLat(coordinates.latitude)
    setRegionMapLon(coordinates.longitude)
  }
  async function thisReserve(parking){
    try{
      const selectedCar= await SecureStore.getItemAsync("patent");
      const response = await getPaymentMethods();
      const cards = await response.json();
      const response2 = await GetCars();
      const cars = await response2.json();
      cars.filter((x)=> x.patentId == selectedCar)!=0
      if((cars.filter((x)=> x.patentId == selectedCar)).length!=0 && cards.length!=0){
        navigation.navigate("Reservation",{parking:parking})  
      }else{
        Alert.alert('Important','To booking: you must add and select some car and credit card.');
      }
    }catch(err){
      console.log(err,'- Posible falta de json -')
    }
  }
  useEffect(() => {
    (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
        }else{
        let location = await Location.getCurrentPositionAsync({});
        setRegionMapLat(location.coords.latitude)
        setRegionMapLon(location.coords.longitude)
        setLocation(location);
        getThisNearParkings(location.coords)
      }
        
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
        setPatent('Add-car');
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
            }}
            region={{
              latitude: regionMapLat,
              longitude: regionMapLon,
              latitudeDelta: 0.010,
              longitudeDelta: 0.016
            }}
          >
          <MapView.Marker
            title="conductor"
            description="conductor"
            coordinate={{"latitude":location.coords.latitude,"longitude":location.coords.longitude}}
            onPress={() => setReserveData((prevState)=>({...prevState,'visible':false})) & centerRegion({'latitude':location.coords.latitude,'longitude':location.coords.longitude})}
            icon={require('../../assets/auto.png')}
          />
         
          {nearParkings.map((item) => 
            <MapView.Marker 
              key={item.id}
              title={"Parking:"+item.businessName}
              description={"cuit: "+item.cuitNumber}
              coordinate={{"latitude":item.latitude,"longitude":item.longitude}}
              onPress={() => thisReserve(item) }
              icon={require('../../assets/gasperavailaible.png')}
            />
            
          )}{/*onPress={() => centerRegion(item) & setReserveData((prevState)=>({...prevState,'visible':true})) & setParking(item)}*/}
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
            onSubmitEditing={()=> getSearchCoords(search)}
            containerStyle={{height: 70, width:400}} />
          <TouchableOpacity style={styles.buttonPatent} onPress={() => carsFlow()}>
            <Text style={styles.textPatent}>{patent}</Text>
          </TouchableOpacity>
          { reserveData.visible ? (
          <TouchableOpacity style={styles.buttonPatent} onPress={() => setModalResVisible(!modalResVisible) }>
            <Text style={styles.textPatent}>Reservar</Text>
          </TouchableOpacity>):<></>
          }
        </View>
        <ReservationsSocket/>
        <View style={styles.centeredView}>
          <ModalPatent 
            parentStates={{modalVisible}} 
            parentSetters={{wrapperSetModalState, wrapperSetPatent}}>
          </ModalPatent>
          <ModalReserve
            parentStates={{modalResVisible,parking}} 
            parentSetters={{wrapperSetResModalState}}>
          </ModalReserve>
        </View>
    </View>
  );
}

export default HomeScreen;
