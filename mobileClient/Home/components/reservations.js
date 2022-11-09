import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image
} from "react-native";
import styles from "../../Services/styles";
import { LinearGradient } from "expo-linear-gradient";
import CardsCarousel from "./cardsCarousel";
import { getPaymentMethods } from "../controllers/payments_methods_controller";
import { useIsFocused } from "@react-navigation/native";
import { PaymentContext } from "../../Services/paymentContext";
import { reserve } from "../controllers/reservation_controller";


function ReservationsScreen({ navigation, route }){ 
  //const [text, onChangeText] = useState("");
  const [paymentsMethods, setPaymentsMethods] = useState([]);
  const focus = useIsFocused();
  const { getSelectedPayment, setSelectedPayment, setIdParking } = React.useContext(PaymentContext);

  useEffect(() => {
    console.log(focus);
    setIdParking(route.params.parking.id);
    const thisGetPaymentMethods = async () => {
      const response = await getPaymentMethods();
      const resData = await response.json();
      console.log(resData);
      setPaymentsMethods(resData);
    };
    if (focus) {
      thisGetPaymentMethods();
    }
  }, [focus]);
  useEffect(()=>{
    if(paymentsMethods.length!=0){
      setSelectedPayment(paymentsMethods[0].cardNumber);
      const a = getSelectedPayment();
      console.log(a);
    }else{
      setSelectedPayment('');
    }
  },[paymentsMethods]);
 
  return (
    <LinearGradient colors={["#3043ff", "#df3ac4"]} style={styles.gradient}>
      <Image source={require("../../assets/logo.png")} style={styles.image} />
      <SafeAreaView style={styles.sectionLong}>
        <View style={styles.space}></View>
        <Text style={styles.themeTextFlat}>Reservation</Text>
        <Text style={styles.heading2}>{route.params.parking.businessName}</Text>
        <Text style={styles.subheading}>{route.params.parking.streetName+" "+route.params.parking.streetNumber}</Text>
        <Text style={styles.subheading}>{"Cuit:"+route.params.parking.cuitNumber}</Text>
        <CardsCarousel payMethod={paymentsMethods}/>
        
        <TouchableOpacity
          style={styles.containButtonStyleFlat}
          onPress={() => console.log(route.params.parking) & 
            console.log(getSelectedPayment()) &
            reserve(route.params.parking.id) // salvar idParking
          }
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

/**
 * Casos de uso para payment
 * -Querer reservar sin medio de pago cargado -> se consulta medios de pago y se procede si existe algún método.
 * -Querer reservar un estacionamiento sin elegir alguna tarjeta -> se procede a utilizar la primera de la lista, el front persiste en cache el id de la tarjeta.
 * -Querer reservar un estacionamiento sin elegir alguna tarjeta -> el front persiste en cache el id de la tarjeta.
 * 
 * -Llegada de evento checkout -> El front procede a utilizar el id de tarjeta persistido. 
 *  
 */