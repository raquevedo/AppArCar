import * as React from "react";
import {
  View,
  Button,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { GetUserInfo } from "../../Services/requests";
import styles from "../../Services/styles";
import { PersistCar } from "../controllers/car_controller";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-paper";
import DatePicker from "react-native-modal-datetime-picker";
import moment from "moment";

function AddCreditCard({ navigation }) {
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardName, setCardName] = React.useState("");
  const [cardUserName, setCardUserName] = React.useState("");
  const [expiredDate, setExpiredDate] = React.useState("");
  const [isDatePickerVisible, setIsDatePickerVisibility] = React.useState(false);

  const showDatePicker = () => {
    setIsDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setIsDatePickerVisibility(false);
  };

  const handleConfirm = (expiredDateDt) => {
    setExpiredDate(expiredDateDt);
    hideDatePicker();
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <LinearGradient colors={["#3043ff", "#df3ac4"]} style={styles.gradient}>
        <Image source={require("../../assets/logo.png")} style={styles.image} />

        <View style={styles.sectionLong}>
          <View style={styles.space}></View>
          <Text style={styles.themeTextShort}>
            Complete payment method data:
          </Text>
          <TextInput
            placeholder="Card number"
            value={cardNumber}
            style={styles.text}
            onChangeText={setCardNumber}
          />
          <TextInput
            placeholder="Card brand"
            value={cardName}
            style={styles.text}
            onChangeText={setCardName}
          />
          <TextInput
            placeholder="Names"
            value={cardUserName}
            style={styles.text}
            onChangeText={setCardUserName}
          />
          <DatePicker
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <TouchableOpacity
            style={styles.containButtonStyleDate}
            onPress={showDatePicker}
          >
            <Text style={styles.textDate}>{`${
              expiredDate
                ? moment(expiredDate).format("MM/DD/YYYY")
                : "Expired date"
            }`}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containButtonStylel}
            onPress={async () =>
              (await PersistCar({
                patentId,
                brand,
                model,
                color,
                productionYear,
              })) & navigation.goBack()
            }
          >
            <LinearGradient
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#df3ac4", "#3043ff"]}
              style={styles.buttonStylel}
            >
              <Text style={styles.buttonText}>Guardar</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.space}></View>
        </View>
        <View style={styles.space}></View>
      </LinearGradient>
    </ScrollView>
  );
}

export default AddCreditCard;
