import { useState, useContext, useEffect, useCallback } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AuthContext } from "../../Services/context";
import styles from "../../Services/styles";
import { LinearGradient } from "expo-linear-gradient";
import DatePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import { Dropdown } from "react-native-element-dropdown";
import CustomInput from "../../GenericComponents/customInput";

function FormReg({ navigation }) {
 
  const [name, setName] = useState({type:"name",value:"",valid:false,isValidOn:false});
  const setInput1Handl = useCallback(val => {setName(val)},[setName]);
  const [lastName, setlastName] = useState({type:"lastName",value:"",valid:false,isValidOn:false});
  const setInput2Handl = useCallback(val => {setlastName(val)},[setlastName]);
  const [documentNumber, setDocument] = useState({type:"document",value:"",valid:false,isValidOn:false});
  const setInput3Handl = useCallback(val => {setDocument(val)},[setDocument]);
  const [contactNumber, setContactNumber] = useState({type:"phone",value:"",valid:false,isValidOn:false});
  const setInput4Handl = useCallback(val => {setContactNumber(val)},[setContactNumber]);

  const [birthDateDt, setBirthday] = useState("");
  const [birthDateStyle, setBirthdayStyle] = useState(styles.containButtonStyleDate);
  const [gender, setGender] = useState("");
  const [genderStyle, setGenderStyle] = useState(styles.dropdown);
  const [isDatePickerVisible, setIsDatePickerVisibility] = useState(false);
  const [validActive, setValidActive] = useState(false);
  
  function inputsActivator(){
    setName({...name,isValidOn:true});
    setlastName({...lastName,isValidOn:true});
    setDocument({...documentNumber,isValidOn:true});
    setContactNumber({...contactNumber,isValidOn:true});
  }
  
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

  const { register } = useContext(AuthContext);
  const { signOut } = useContext(AuthContext);

  const [isFocus, setIsFocus] = useState(false);
  const data = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Other", value: "Other" },
  ];

  useEffect(()=>{
    if(validActive){
      if(birthDateDt===""){
        setBirthdayStyle(styles.containButtonStyleDateError);
      }else{
        setBirthdayStyle(styles.containButtonStyleDate);
      }
      if(gender===""){
        setGenderStyle(styles.dropdownError);
      }else{
        setGenderStyle(styles.dropdown);
      }
    }
  },[birthDateDt,gender,validActive]);

  function thisRegister(){
    if(birthDateDt!=="" && gender!=="" && name.valid && lastName.valid && documentNumber.valid && contactNumber.valid){
      register({name:name.value,
        lastName:lastName.value,
        documentNumber:documentNumber.value,
        birthDateDt,
        contactNumber:contactNumber.value,
        gender,
      });  
    }else{
      setValidActive(true);
      inputsActivator();
    }
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <LinearGradient colors={["#3043ff", "#df3ac4"]} style={styles.gradient}>
        <Image source={require("../../assets/logo.png")} style={styles.image} />
        <View style={styles.sectionLong}>
          <View style={styles.space}></View>
          <Text style={styles.themeTextShort}>Tell us about you</Text>
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
                : "Date of birth"
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
              thisRegister()
            }
          >
            <LinearGradient
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#df3ac4", "#3043ff"]}
              style={styles.buttonStylel}
            >
              <Text style={styles.buttonText}>Send</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.space}></View>
        </View>
        <View style={styles.space}>
          <TouchableOpacity
            style={styles.containButtonStyle}
            onPress={() => signOut({})}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 0 }}
              colors={["#3043ff", "#df3ac4"]}
              style={styles.buttonStyle}
            >
              <Text style={styles.buttonText}>Sign out</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}
export default FormReg;