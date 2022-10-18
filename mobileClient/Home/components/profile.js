import * as React from "react";
import { View, Button, ScrollView, Text, TouchableOpacity,Image } from "react-native";
import { GetUserInfo } from "../../Services/requests";
import { PersistProfile } from "../controllers/profile_controller";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../../Services/styles";
import { TextInput } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import DatePicker from "react-native-modal-datetime-picker";
import moment from "moment";
function Profile({ navigation }) {
  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [documentNumber, setDocument] = React.useState("");
  const [birthDateDt, setBirthday] = React.useState("");
  const [contactNumber, setContactNumber] = React.useState("");
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
    console.log(respData);
  };

  const [isFocus, setIsFocus] = React.useState(false);
  const data = [
    { label: "Masculino", value: "Masculino" },
    { label: "Femenino", value: "Femenino" },
    { label: "Indefinido", value: "Indefinido" },
  ];
  React.useEffect(() => {
    loadDataOnlyOnce();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <LinearGradient colors={["#3043ff", "#df3ac4"]} style={styles.gradient}>
      <Image source={require("../../assets/logo.png")} style={styles.image} />
        
        <View style={styles.sectionLong}>
          <View style={styles.space}></View>
          <Text style={styles.themeTextShort}>Perfil</Text>
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
            onChangeText={setLastName}
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

          <DatePicker
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />

          <TextInput
            placeholder="Teléfono móvil"
            value={contactNumber}
            onChangeText={setContactNumber}
            style={styles.text}
            left={<TextInput.Icon icon="phone" />}
          />
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
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

          <TouchableOpacity
            style={styles.containButtonStylel}
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
          >
            <LinearGradient
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#df3ac4", "#3043ff"]}
              style={styles.buttonStylel}
            >
              <Text style={styles.buttonText}>Cargar</Text>
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.space}></View>
        </View>
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
    </ScrollView>
  );
}

export default Profile;