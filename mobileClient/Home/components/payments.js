import * as React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
import { GetUserInfo } from "../../Services/requests";
import { getPaymentMethods, deleteCreditCard } from "../controllers/payments_methods_controller";
import { useIsFocused } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../../Services/styles";

function Payments({ navigation }) {
  const [paymentsMethods, setPaymentsMethods] = React.useState([]);
  const focus = useIsFocused();
  const [deleteFlag, setDeleteFlag] = React. useState();

  emptyListView = () => {
    return (
      <View>
        <Text style={{ fontFamily: "TTNorms-Regular",fontSize: 30 }}>
          You have not payment methods regitered.
        </Text>
      </View>
    );
  };

  renderSeparator = () => {
    return <View style={styles.itemSeparator}></View>;
  };

  async function eraseCreditCard (itemId){
    
    const erase = async (itemId) => {
      const response = await deleteCreditCard(itemId)
      setDeleteFlag(Date.now()+response.status);
    }

    Alert.alert(
      "Hey!",
      "Your credit card will be deleted",
      [
        {
          text: "Accept",
          onPress: () => erase(itemId),
          style: "accept",
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
    /*if (confirm("Yoy will delete this credit card") == true) {
      await deleteCreditCard(itemId)
      navigation.navigate('Payments')

    }*/)
  }

  React.useEffect(() => {
    console.log(focus);
    const thisGetPaymentMethods = async () => {
      const response = await getPaymentMethods();
      const resData = await response.json();
      console.log(resData);
      setPaymentsMethods(resData);
    };
    if (focus) {
      thisGetPaymentMethods();
    }
  }, [focus,deleteFlag]);

  return (
    <LinearGradient colors={["#3043ff", "#df3ac4"]} style={styles.gradient}>
      <Image source={require("../../assets/logo.png")} style={styles.image} />
      <SafeAreaView style={styles.sectionLong}>
        <View style={styles.space}></View>
        <Text style={styles.themeTextFlat}>Your cards</Text>
        <View style={styles.containFlat}>
          <FlatList
            ListEmptyComponent={emptyListView}
            ItemSeparatorComponent={renderSeparator}
            data={paymentsMethods}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View style={styles.flatlist}>
                  <Text
                    style={styles.textFlatList}
                  
                  >
                    <View style={styles.containTextFlatList}>
                    <Text style={styles.heading2}>{item.cardName}</Text>
                    
                    <Text style={styles.subheading}>{item.cardNumber}</Text>
                    <Text style={styles.subheading}>{item.company +' '+ item.type}</Text>
                    <Text 
                      style={styles.subheading2}
                      onPress={() =>
                        eraseCreditCard(item.id)
                      }
                    >Borrar</Text>
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
          onPress={() => navigation.navigate("Add Credit Card")}
        >
          <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["#df3ac4", "#3043ff"]}
            style={styles.buttonStyleFlat}
          >
            <Text style={styles.buttonText}>Add card</Text>
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

export default Payments;
