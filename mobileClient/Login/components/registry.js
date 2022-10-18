import * as React from "react";
import {
  View,
  Button,
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
  const [name, setName] = React.useState("");
  const [lastName, setlastName] = React.useState("");
  //const [patent, setpatent] = React.useState('');
  const [documentNumber, setDocument] = React.useState("");
  const [birthDateDt, setBirthday] = React.useState("");
  //const [residence, setResidence] = React.useState('');
  const [contactNumber, setContactNumber] = React.useState("");
  //const [brandCar, setBrandCar] = React.useState('');
  //const [modelCar, setModelCar] = React.useState('');
  const [gender, setGender] = React.useState("");
  const [isDatePickerVisible, setIsDatePickerVisibility] =
    React.useState(false);

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

  const { register } = React.useContext(AuthContext);
  const { signOut } = React.useContext(AuthContext);

  const [isFocus, setIsFocus] = React.useState(false);
  const data = [
    { label: "Masculino", value: "Masculino" },
    { label: "Femenino", value: "Femenino" },
    { label: "Indefinido", value: "Indefinido" },
  ];
  return (
    <ScrollView style={{ flex: 1 }}>
      <LinearGradient colors={["#3043ff", "#df3ac4"]} style={styles.gradient}>
        <Image source={require("../../assets/logo.png")} style={styles.image} />
        <View style={styles.sectionLong}>
          <View style={styles.space}></View>
          <Text style={styles.themeTextShort}>Complete sus datos:</Text>
          <TextInput
            placeholder="Nombre"
            value={name}
            onChangeText={setName}
            style={styles.text}
            left={<TextInput.Icon icon="eye" />}
          />
          <TextInput
            placeholder="Apellido"
            value={lastName}
            onChangeText={setlastName}
            style={styles.text}
            left={<TextInput.Icon icon="eye" />}
          />

          <TextInput
            placeholder="Documento"
            value={documentNumber}
            onChangeText={setDocument}
            style={styles.text}
            left={<TextInput.Icon icon="book" />}
          />

          <TextInput
            placeholder="Teléfono móvil"
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
            label="Genero"
            data={data}
            placeholder="Seleccione Genero"
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
                : "Fecha de Nacimiento"
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
              register({
                name,
                lastName,
                documentNumber,
                birthDateDt,
                contactNumber,
                gender,
              })
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
