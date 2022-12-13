import { useState,useCallback, } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { PersistProfile } from "../controllers/profile_controller";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../../Services/styles";
import { Dropdown } from "react-native-element-dropdown";
import DatePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import CustomInput from "../../GenericComponents/customInput";

function EditProfile({ navigation, route }) {
  const { user } = route.params;
  const translate = {Masculino:"Male",Femenino:"Female",Otro:"Other"}
 
  const [name, setName] = useState({type:"name",value:user.name,valid:false,isValidOn:true});
  const setInput1Handl = useCallback(val => {setName(val)},[setName]);
  const [lastName, setlastName] = useState({type:"lastName",value:user.lastName,valid:false,isValidOn:true});
  const setInput2Handl = useCallback(val => {setlastName(val)},[setlastName]);
  const [documentNumber, setDocument] = useState({type:"document",value:user.documentNumber.toString(),valid:false,isValidOn:true});
  const setInput3Handl = useCallback(val => {setDocument(val)},[setDocument]);
  const [contactNumber, setContactNumber] = useState({type:"phone",value:user.contactNumber.toString(),valid:false,isValidOn:true});
  const setInput4Handl = useCallback(val => {setContactNumber(val)},[setContactNumber]);

  const [birthDateDt, setBirthday] = useState(user.birthDateDt.toString());
  const [birthDateStyle, setBirthdayStyle] = useState(styles.containButtonStyleDate);
  const [gender, setGender] = useState(user.gender);
  const [genderStyle, setGenderStyle] = useState(styles.dropdown);
  const [isDatePickerVisible, setIsDatePickerVisibility] = useState(false);

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
  
  const [isFocus, setIsFocus] = useState(false);
  const data = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Other", value: "Other" },
  ];

  function thisPersistProfile(){
    if(birthDateDt!=="" && gender!=="" && name.valid && lastName.valid && documentNumber.valid && contactNumber.valid){
      PersistProfile({name:name.value,
        lastName:lastName.value,
        documentNumber:documentNumber.value,
        birthDateDt,
        contactNumber:contactNumber.value,
        gender,
      });  
    }
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <LinearGradient colors={["#3043ff", "#df3ac4"]} style={styles.gradient}>
        <Image source={require("../../assets/logo.png")} style={styles.image} />
          <View style={styles.sectionLong}>
          <View style={styles.space}></View>
          <Text style={styles.themeTextShort}>Edit profile</Text>
          <CustomInput styles={styles} data={name} setData={setInput1Handl}></CustomInput>
          <CustomInput styles={styles} data={lastName} setData={setInput2Handl}></CustomInput>
          <CustomInput styles={styles} data={documentNumber} setData={setInput3Handl}></CustomInput>
          <CustomInput styles={styles} data={contactNumber} setData={setInput4Handl}></CustomInput>
          <Dropdown
            style={[genderStyle, isFocus && { borderColor: "blue" }]}
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
            style={birthDateStyle}
            onPress={showDatePicker}
          >
            <Text style={styles.textDate}>{`${
              birthDateDt
                ? moment(birthDateDt).format("MM/DD/YYYY")
                : "Born date"
            }`}</Text>
          </TouchableOpacity>
          <DatePicker
            isVisible={isDatePickerVisible}
            mode="date"
            locale="en_GB"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <TouchableOpacity
            style={styles.containButtonStylel}
            onPress={() =>
              thisPersistProfile()
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

export default EditProfile;