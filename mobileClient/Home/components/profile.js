import { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { GetUserInfo } from "../../Services/requests";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../../Services/styles";
import { useIsFocused } from "@react-navigation/native";

function Profile({ navigation }) {
  const [user,setUser] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [documentNumber, setDocument] = useState("");
  const [birthDateDt, setBirthday] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [gender, setGender] = useState("Male");
  const [isDatePickerVisible, setIsDatePickerVisibility] = useState(false);
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

  const [isFocus, setIsFocus] = useState(false);
  const data = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Other", value: "Other" },
  ];
  useEffect(() => {
    loadDataOnlyOnce();
  }, [focus]);

  return (
    <ScrollView style={{ flex: 1 }}>
      <LinearGradient colors={["#3043ff", "#df3ac4"]} style={styles.gradient}>
        <Image source={require("../../assets/logo.png")} style={styles.image} />
        <View style={styles.sectionLong}>
          <View style={styles.space}></View>
          <Text style={styles.themeTextShort}>Profile</Text>
          
          <Text style={styles.subheadingTitle}>Name:</Text>
          <Text style={styles.nameSurname}>{name}</Text>
          <Text style={styles.subheadingTitle}>Last Name:</Text>
          <Text style={styles.nameSurname}>{lastName}</Text>
          <Text style={styles.subheadingTitle}>Document Number:</Text>
          <Text style={styles.subheading}>{documentNumber}</Text>
          <Text style={styles.subheadingTitle}>Contact Number:</Text>
          <Text style={styles.subheading}>{contactNumber}</Text>
          <Text style={styles.subheadingTitle}>Gender:</Text>
          <Text style={styles.subheading}>{gender}</Text>
          <Text style={styles.subheadingTitle}>Birth Date:</Text>
          <Text style={styles.subheading}>{birthDateDt}</Text>
          <View style={styles.space}></View>
          <View style={styles.space}></View>
          <View style={styles.space}></View>
          <View style={styles.space}></View>
          <TouchableOpacity
            style={styles.containButtonStylel}
            onPress={() =>
              navigation.navigate('Edit Profile',{user:user})
            }
          >
            <LinearGradient
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#df3ac4", "#3043ff"]}
              style={styles.buttonStylel}
            >
              <Text style={styles.buttonText}>Edit</Text>
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