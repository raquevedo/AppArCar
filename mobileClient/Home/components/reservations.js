import React from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image
} from "react-native";
import styles from "../../Services/styles";
import { LinearGradient } from "expo-linear-gradient";

function ReservationsScreen({ navigation, route }){ 
  const [text, onChangeText] = React.useState("");

 
  return (
    <LinearGradient colors={["#3043ff", "#df3ac4"]} style={styles.gradient}>
      <Image source={require("../../assets/logo.png")} style={styles.image} />
      <SafeAreaView style={styles.sectionLong}>
        <View style={styles.space}></View>
        <Text style={styles.themeTextFlat}>Reservation</Text>
        <Text style={styles.heading2}>{route.params.parking.businessName}</Text>
        <Text style={styles.subheading}>{route.params.parking.streetName+" "+route.params.parking.streetNumber}</Text>
        <Text style={styles.subheading}>{"Cuit:"+route.params.parking.cuitNumber}</Text>
        <View style={styles.space}></View>
        <TouchableOpacity
          style={styles.containButtonStyleFlat}
          onPress={() => console.log(route.params.parking)}
        >
          <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["#df3ac4", "#3043ff"]}
            style={styles.buttonStyleFlat}
          >
            <Text style={styles.buttonText}>Reserve</Text>
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
};


export default ReservationsScreen;