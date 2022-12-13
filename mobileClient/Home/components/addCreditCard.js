import { useState,useEffect,useCallback } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { persistCreditCard } from "../controllers/payments_methods_controller";
import styles from "../../Services/styles";
import { LinearGradient } from "expo-linear-gradient";
import DatePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import { Dropdown } from "react-native-element-dropdown";
import CustomInput from "../../GenericComponents/customInput";

function AddCreditCard({ navigation }) {

  const [expireDate, setExpireDate] = useState("");
  const [expireDateStyle, setExpireDateyStyle] = useState(styles.containButtonStyleDate);
  const [company, setCompany] = useState("");
  const [companyStyle, setCompanyStyle] = useState(styles.dropdown);
  const [type, setType] = useState("");
  const [typeStyle, setTypeStyle] = useState(styles.dropdown);
  const [isDatePickerVisible, setIsDatePickerVisibility] = useState(false);
  const [validActive, setValidActive] = useState(false);

  const [cardNumber, setCardNumber] = useState({type:"ccard",value:"",valid:false,isValidOn:false});
  const setInput1Handl = useCallback(val => {setCardNumber(val)},[setCardNumber]);
  const [cardName, setCardName] = useState({type:"ccname",value:"",valid:false,isValidOn:false});
  const setInput2Handl = useCallback(val => {setCardName(val)},[setCardName]);
 
  function inputsActivator(){
    setCardNumber({...cardNumber,isValidOn:true});
    setCardName({...cardName,isValidOn:true});
  }

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
  const [isFocus, setIsFocus] = useState(false);

  const cardType = [
    { label: "Debit", value: "Debit" },
    { label: "Credit", value: "Credit" }
  ];

  const cardCompany = [
    { label: "Visa", value: "Visa" },
    { label: "Amex", value: "Amex" },
    { label: "Master", value: "Master" }
  ];

  function expireDateValidation(){
    const variable=1;
    if(expireDate !== "" && (expireDate > Date.now()) ){
      return true;
    }else{
      if(expireDate !== ""){
        Alert.alert('I so sorry!!','Your credit card is expired. Please retry with other credit card.');
      }
    }
  }

  useEffect(()=>{
    if(validActive){
      if(expireDate===""){
        setExpireDateyStyle(styles.containButtonStyleDateError);
      }else{
        setExpireDateyStyle(styles.containButtonStyleDate);
      }
      if(company===""){
        setCompanyStyle(styles.dropdownError);
      }else{
        setCompanyStyle(styles.dropdown);
      }
      if(type===""){
        setTypeStyle(styles.dropdownError);
      }else{
        setTypeStyle(styles.dropdown);
      }
    }
  },[expireDate,company,type,validActive]);

  async function thisPersistCreditCard(){
    if(expireDate !=="" && expireDateValidation() && company!=="" && type!=="" && cardName.valid && cardNumber.valid ){
      await persistCreditCard({
        cardNumber:cardNumber.value,
        cardName:cardName.value,
        company,
        type,
        expireDate
      });  
      navigation.goBack();
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
          <Text style={styles.themeTextShort}>
            Payment method data:
          </Text>
          <CustomInput styles={styles} data={cardNumber} setData={setInput1Handl}></CustomInput>
          <CustomInput styles={styles} data={cardName} setData={setInput2Handl}></CustomInput>
          <Dropdown
            style={[companyStyle, isFocus && { borderColor: "blue" }]}
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
            style={[typeStyle, isFocus && { borderColor: "blue" }]}
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
            locale="en_GB"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <TouchableOpacity
            style={expireDateStyle}
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
            onPress={() =>
              thisPersistCreditCard()
            }
          >
            <LinearGradient
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#df3ac4", "#3043ff"]}
              style={styles.buttonStylel}
            >
              <Text style={styles.buttonText}>Save</Text>
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
