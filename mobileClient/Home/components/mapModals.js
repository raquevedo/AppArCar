import {useState, useEffect} from "react";
import { StyleSheet, View, Text, Modal, Pressable, Button, Alert } from "react-native";
import { reserve } from "../controllers/reservation_controller";
import { GetCars } from "../controllers/car_controller";
import { useIsFocused } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import { io } from "socket.io-client";
import host_instance from '../../host_instance.json';

function ModalPatent({ navigation,parentStates,parentSetters }) {
  
  /*const [modalVisible, setModalVisible] = useState(false);
  const [modalResVisible, setModalResVisible] = useState(false); */
  const [cars, setCars] = useState([]);
  const focus = useIsFocused();
  
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

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={parentStates.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            parentSetters.wrapperSetModalState(!parentStates.modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {cars.map((item) => 
                <Text style={styles.modalText} 
                  key={item.patentId} 
                  onPress={async ()=> {
                  parentSetters.wrapperSetPatent(item.patentId) & 
                  await SecureStore.setItemAsync("patent", item.patentId) & 
                  parentSetters.wrapperSetModalState(!parentStates.modalVisible)}}>
                    {item.patentId}
                </Text> 
              )}
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => parentSetters.wrapperSetModalState(!parentStates.modalVisible)}
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
function ModalReserve({parentStates,parentSetters}){
  
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={parentStates.modalResVisible}
          onRequestClose={() => {
            //Alert.alert("Modal has been closed.");
            parentSetters.wrapperSetResModalState(!parentStates.modalResVisible);
          }}
          >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text >You will be reserving at {parentStates.parking.businessName}. Location: {parentStates.parking.streetName}{parentStates.parking.streetNumber}</Text>
              <Pressable
                style={styles.button}
                onPress={() => 
                  reserve(parentStates.parking.id) &
                  parentSetters.wrapperSetResModalState(!parentStates.modalResVisible)
                }
              >
                <Text style={styles.textStyle}>Reserve</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() => parentSetters.wrapperSetResModalState(!parentStates.modalResVisible)}
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

export {ModalPatent, ModalReserve};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 120,
        position: 'absolute', 
    },
    modalView: {
        margin: 60,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 60,
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
      width: 150,
      height: 30,
      borderRadius: 20,
      marginTop: 20,
      marginBotton: 200,//posición boton en y
      padding: 5,
      elevation: 1,
      color:"green"
    },
    textStyle: {
        marginBottom: 1,
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginTop: 10,
        textAlign: "center"
    }
});
