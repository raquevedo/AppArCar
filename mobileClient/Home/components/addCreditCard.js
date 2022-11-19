import * as React from "react";
import {
  View,
  Button,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { persistCreditCard } from "../controllers/payments_methods_controller";
import styles from "../../Services/styles";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-paper";
import DatePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import { Dropdown } from "react-native-element-dropdown";

function AddCreditCard({ navigation }) {
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardName, setCardName] = React.useState("");
  const [expireDate, setExpireDate] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [type, setType] = React.useState("");
  const [isDatePickerVisible, setIsDatePickerVisibility] = React.useState(false);

  const showDatePicker = () => {
    setIsDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setIsDatePickerVisibility(false);
  };

  const handleConfirm = (expiredDateDt) => {
    setExpireDate(expiredDateDt);
    hideDatePicker();
  };
  const [isFocus, setIsFocus] = React.useState(false);

  const cardType = [
    { label: "Debit", value: "Debit" },
    { label: "Credit", value: "Credit" }
  ];

  const cardCompany = [
    { label: "Visa", value: "Visa" },
    { label: "Amex", value: "Amex" },
    { label: "Master", value: "Master" }
  ];

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
            placeholder="Card Name"
            value={cardName}
            style={styles.text}
            onChangeText={setCardName}
          />

          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            labelField="label"
            valueField="value"
            label="Company"
            data={cardCompany}
            placeholder="Company"
            value={company}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setCompany(item.value);
              setIsFocus(false);
            }}
          />
          
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            labelField="label"
            valueField="value"
            label="Card Type"
            data={cardType}
            placeholder="Card Type"
            value={type}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setType(item.value);
              setIsFocus(false);
            }}
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
              expireDate
                ? moment(expireDate).format("MM/DD/YYYY")
                : "Expire date"
            }`}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containButtonStylel}
            onPress={async () =>
              (await persistCreditCard({
                cardNumber,
                cardName,
                company,
                type,
                expireDate,
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
