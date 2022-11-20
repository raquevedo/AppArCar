import { useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AuthContext } from "../../Services/context";
import styles from "../../Services/styles";
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import DatePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import { Dropdown } from "react-native-element-dropdown";

function FormReg({ navigation }) {
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [documentNumber, setDocument] = useState("");
  const [birthDateDt, setBirthday] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [gender, setGender] = useState("");
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

  const { register } = useContext(AuthContext);
  const { signOut } = useContext(AuthContext);

  const [isFocus, setIsFocus] = useState(false);
  const data = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Other", value: "Other" },
  ];

  function thisRegister(){
    register({
      name,
      lastName,
      documentNumber,
      birthDateDt,
      contactNumber,
      gender,
    })
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <LinearGradient colors={["#3043ff", "#df3ac4"]} style={styles.gradient}>
        <Image source={require("../../assets/logo.png")} style={styles.image} />
        <View style={styles.sectionLong}>
          <View style={styles.space}></View>
          <Text style={styles.themeTextShort}>Complete sus datos:</Text>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={styles.text}
            left={<TextInput.Icon icon="eye" />}
          />
          <TextInput
            placeholder="Surname"
            value={lastName}
            onChangeText={setlastName}
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

          <TextInput
            placeholder="Mobile phone"
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
          <DatePicker
            isVisible={isDatePickerVisible}
            mode="date"
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

/*
 <TextInput
          placeholder="patente"
          value={brandCar}
          onChangeText={setBrandCar}
        />
        <TextInput
          placeholder="modelCar"
          value={modelCar}
          onChangeText={setModelCar}
        />
        <TextInput
          placeholder="residence"
          value={residence}
          onChangeText={setResidence}
        />
        <TextInput
          placeholder="patent"
          value={patent}
          onChangeText={setpatent}
        />
  */
