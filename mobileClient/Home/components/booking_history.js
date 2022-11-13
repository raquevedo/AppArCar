import React, {useState,useEffect} from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
import { getReservations } from "../controllers/booking_history_controller";
import { getParkingInfo } from "../controllers/parking";
import { useIsFocused } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../../Services/styles";

function BookingHistory({ navigation }) {
  const [reservations, setReservations] = useState([]);
  const focus = useIsFocused();

  emptyListView = () => {
    return (
      <View>
        <Text style={{ fontFamily: "TTNorms-Regular",fontSize: 30 }}>
          No reservations found.
        </Text>
      </View>
    );
  };

  renderSeparator = () => {
    return <View style={styles.itemSeparator}></View>;
  };

  async function reservationsCompleterInfo(reservations){
    let reservationsAux = reservations;
    for await(reservation of reservations){
      const response = await getParkingInfo(reservation.idParking);
      const resData = await response.json();
      reservation.parkingInfo = resData;
    }
    return reservations;
  }

  function parseDate(date){
    return date.slice(8,10)+'-'+date.slice(5,7)+'-'+date.slice(0,4)
  }

  useEffect(() => {
    console.log(focus);
    const getThisReservations = async () => {
      const response = await getReservations();
      const resData = await response.json();
      console.log(resData);
      const reservationsUpdated = await reservationsCompleterInfo(resData);
      setReservations(reservationsUpdated);
    };
    if (focus) {
      getThisReservations();
    }
  }, [focus]);

  return (
    <LinearGradient colors={["#3043ff", "#df3ac4"]} style={styles.gradient}>
      <Image source={require("../../assets/logo.png")} style={styles.image} />
      <SafeAreaView style={styles.sectionLong}>
        <View style={styles.space}></View>
        <Text style={styles.themeTextFlat}>Booking History</Text>
        <View style={styles.containFlat}>
          <FlatList
            ListEmptyComponent={emptyListView}
            ItemSeparatorComponent={renderSeparator}
            data={reservations}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View style={styles.flatlist}>
                  <Text
                    style={styles.textFlatList}
                  >
                    <View style={styles.containTextFlatList}>
                    <Text style={styles.heading2}>{item.parkingInfo.businessName}</Text>
                    <Text style={styles.subheading}>{item.parkingInfo.streetName+' '+item.parkingInfo.streetNumber}</Text>
                    <Text style={styles.subheading}>{parseDate(item.parkingInfo.sysCreatedAtDttm)}</Text>
                    </View>
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.space}></View>
        <TouchableOpacity
          style={styles.containButtonStyleFlat}
          onPress={() => Alert.alert('Excelent','Your reservation has been extended for 30 mins.')}
        >
          <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["#df3ac4", "#3043ff"]}
            style={styles.buttonStyleFlat}
          >
            <Text style={styles.buttonText}>Extend reservation</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.space}></View>
      </SafeAreaView>
      <View style={styles.space}>
        <TouchableOpacity
          style={styles.containButtonStyle}
          onPress={() => navigation.navigate("Home")}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 0 }}
            colors={["#3043ff", "#df3ac4"]}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonText}>Back</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

export default BookingHistory;
