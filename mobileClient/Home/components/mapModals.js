import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Pressable,
  Alert,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { reserve } from "../controllers/reservation_controller";
import { GetCars } from "../controllers/car_controller";
import { useIsFocused } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import styles from "../../Services/styles";
import { LinearGradient } from "expo-linear-gradient";

function ModalPatent({ navigation, parentStates, parentSetters }) {
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
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={parentStates.modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              parentSetters.wrapperSetModalState(!parentStates.modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.themeTextFlat}>Your cars</Text>
                {cars.map((item) => (
                  <Text
                    style={styles.modalText}
                    key={item.patentId}
                    onPress={async () => {
                      parentSetters.wrapperSetPatent(item.patentId) &
                        (await SecureStore.setItemAsync(
                          "patent",
                          item.patentId
                        )) &
                        parentSetters.wrapperSetModalState(
                          !parentStates.modalVisible
                        );
                    }}
                  >
                    {item.patentId}
                  </Text>
                ))}

                <TouchableOpacity
                  style={styles.containButtonStylel}
                  onPress={() =>
                    parentSetters.wrapperSetModalState(
                      !parentStates.modalVisible
                    )
                  }
                >
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={["#3043ff", "#df3ac4"]}
                    style={styles.buttonStylel}
                  >
                    <Text style={styles.buttonTextl}>Close</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </ScrollView>
  );
}
function ModalReserve({ parentStates, parentSetters }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={parentStates.modalResVisible}
          onRequestClose={() => {
            //Alert.alert("Modal has been closed.");
            parentSetters.wrapperSetResModalState(
              !parentStates.modalResVisible
            );
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text>
                You will be reserving at {parentStates.parking.businessName}.
                Location: {parentStates.parking.streetName}
                {parentStates.parking.streetNumber}
              </Text>
              <Pressable
                style={styles.button}
                onPress={() =>
                  reserve(parentStates.parking.id) &
                  parentSetters.wrapperSetResModalState(
                    !parentStates.modalResVisible
                  )
                }
              >
                <Text style={styles.textStyle}>Reserve</Text>
              </Pressable>
              <Pressable
                style={styles.button}
                onPress={() =>
                  parentSetters.wrapperSetResModalState(
                    !parentStates.modalResVisible
                  )
                }
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

export { ModalPatent, ModalReserve };
