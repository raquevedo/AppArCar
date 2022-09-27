import * as React from "react";
import { View, Button, ScrollView, Text, TouchableOpacity } from "react-native";
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
  const data = [
    { label: "Masculino", value: "1" },
    { label: "Femenino", value: "2" },
    { label: "Indefinido", value: "3" },
  ];
  React.useEffect(() => {
    loadDataOnlyOnce();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <LinearGradient colors={["#3043ff", "#df3ac4"]} style={styles.gradient}>
        <View style={styles.space}></View>
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
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            valueField="value"
            label="Genero"
            data={data}
            search
            labelField="label"
            placeholder="Seleccione Genero"
            searchPlaceholder="Search..."
            value={gender}
            onChange={(item) => {
              setGender(item.label);
            }}
          />
          <Text>{`Date:  ${
            birthDateDt ? moment(birthDateDt).format("MM/DD/YYYY") : "--/--/--"
          }`}</Text>
          <TouchableOpacity
            style={styles.containButtonStylel}
            onPress={showDatePicker}
          >
            <LinearGradient
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
              colors={["#df3ac4", "#3043ff"]}
              style={styles.buttonStylel}
            >
              <Text style={styles.textDate}>Fecha de Nacimiento</Text>
            </LinearGradient>
          </TouchableOpacity>
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
