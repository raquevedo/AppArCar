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
import { reservationExtend } from "../controllers/reservation_controller";
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

  function formatEnglishDate(date){
    const dateObj=new Date(date);
    return (dateObj.getMonth()+1)+'/'+dateObj.getDate()+'/'+dateObj.getFullYear();
  }
  function parseDateTime(date){
    return date.slice(11,16)+'hs / '+date.slice(8,10)+'-'+date.slice(5,7)+'-'+date.slice(0,4);
  }
  function extendReservation(idReservation){
    if(reservations[reservations.length-1].checkinAtDttm == null){
      reservationExtend(idReservation);
    }else{
      Alert.alert('Sorry','Operation not allowed.')
    }
    
  }
  useEffect(() => {
    console.log(focus);
    const getThisReservations = async () => {
      try{
        const response = await getReservations().catch(()=>Alert.alert('Ups','Connection errors on booking history'));;
        const resData = await response.json();
        console.log(resData);
        setReservations(resData);
      }catch(err){
        console.log(err);
      }
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
                        <Text style={styles.heading2}>Patent: {item.patentId}</Text>
                        <Text style={styles.subheading}>Application:{formatEnglishDate(item.createdAtDttm)}</Text>
                        {item.checkoutAtDttm!=null?<>
                        <Text style={styles.subheading}>Closed:{formatEnglishDate(item.checkoutAtDttm)}</Text>
                        </>:
                        <></>}
                        <Text style={styles.subheading}>Amount:{item.totalPrice}</Text>    
                    </View>
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.space}></View>
        {reservations.length != 0 && reservations[reservations.length-1].status == 'accepted' ? <>
          <Text style={styles.themeTextFlat2}>You have an active booking at:</Text>
          <Text style={styles.subheading3}>
            {parseDateTime(reservations[reservations.length-1].expirationAtDttm)}
          </Text>
          <TouchableOpacity
            style={styles.containButtonStyleFlat}
            onPress={() => extendReservation(reservations[reservations.length-1].id)}
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
        </> : 
        (<></>)}
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
