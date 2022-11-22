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
import { PersistProfile } from "../controllers/profile_controller";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../../Services/styles";
import { TextInput } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import DatePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import { useIsFocused } from "@react-navigation/native";
function Profile({ navigation }) {
  const [user,setUser] = React.useState("");
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [documentNumber, setDocument] = React.useState("");
  const [birthDateDt, setBirthday] = React.useState("");
  const [contactNumber, setContactNumber] = React.useState("");
  const [gender, setGender] = React.useState("Male");
  const [isDatePickerVisible, setIsDatePickerVisibility] = React.useState(false);
  const focus = useIsFocused();

  const showDatePicker = () => {
    setIsDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setIsDatePickerVisibility(false);
  };

  const handleConfirm = (birthDateDt) => {
    setBirthday(birthDateDt);
    hideDatePicker();
  };
  const loadDataOnlyOnce = async function () {
    const response = await GetUserInfo();
    let respData = await response.json();
    respData = respData.data;
    setName(respData.name);
    setLastName(respData.lastName);
    setDocument(respData.documentNumber.toString());
    setBirthday(respData.birthDateDt);
    setContactNumber(respData.contactNumber.toString());
    setGender(respData.gender);
    setUser(respData);
    console.log(respData);
  };

  const [isFocus, setIsFocus] = React.useState(false);
  const data = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Other", value: "Other" },
  ];
  React.useEffect(() => {
    loadDataOnlyOnce();
  }, [focus]);

  return (
    <ScrollView style={{ flex: 1 }}>
      <LinearGradient colors={["#3043ff", "#df3ac4"]} style={styles.gradient}>
        <Image source={require("../../assets/logo.png")} style={styles.image} />

        <View style={styles.sectionLong}>

          <View style={styles.space}></View>
          <Text style={styles.themeTextShort}>Profile</Text>
          <Text style={styles.subheading}>{name}</Text>
          <Text style={styles.subheading}>{lastName}</Text>
          <Text style={styles.subheading}>{documentNumber}</Text>
          <Text style={styles.subheading}>{contactNumber}</Text>
          <Text style={styles.subheading}>{gender}</Text>
          <Text style={styles.subheading}>{birthDateDt}</Text>
        
          <View style={styles.space}></View>
          <View style={styles.space}></View>
          <View style={styles.space}></View>
          <View style={styles.space}></View>
          <View style={styles.space}></View>
          <View style={styles.space}></View>
          <View style={styles.space}></View>
          <View style={styles.space}></View>
          <TouchableOpacity
            style={styles.containButtonStylel}
            onPress={() =>
              navigation.navigate('EditProfile2',{user:user})
            }
          >
            <LinearGradient
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#df3ac4", "#3043ff"]}
              style={styles.buttonStylel}
            >
              <Text style={styles.buttonText}>Update</Text>
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.space}></View>
        </View>
        <View style={styles.space}></View>
        <View style={styles.space}></View>
      </LinearGradient>
    </ScrollView>
  );
}

export default Profile;
/*
<TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={styles.text}
            left={<TextInput.Icon icon="eye" />}
          />
          <TextInput
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            style={styles.text}
            left={<TextInput.Icon icon="eye" />}
          />
          <TextInput
            placeholder="Document Number"
            value={documentNumber}
            onChangeText={setDocument}
            style={styles.text}
            left={<TextInput.Icon icon="book" />}
          />

          <DatePicker
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />

          <TextInput
            placeholder="Mobile Phone"
            value={contactNumber}
            onChangeText={setContactNumber}
            style={styles.text}
            left={<TextInput.Icon icon="phone" />}
          />
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            labelField="label"
            valueField="value"
            label="Gender"
            data={data}
            placeholder="Gender"
            value={gender}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setGender(item.value);
              setIsFocus(false);
            }}
          />
          <TouchableOpacity
            style={styles.containButtonStyleDate}
            onPress={showDatePicker}
          >
            <Text style={styles.textDate}>{`${
              birthDateDt
                ? moment(birthDateDt).format("MM/DD/YYYY")
                : "Born date"
            }`}</Text>
          </TouchableOpacity>
          onPress={() =>
              PersistProfile({
                name,
                lastName,
                documentNumber,
                birthDateDt,
                contactNumber,
                gender,
              })
            }
*/