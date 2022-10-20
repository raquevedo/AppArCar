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
import styles from "../../Services/styles";
import { PersistCar } from "../controllers/car_controller";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-paper";

function AddCar({ navigation }) {
  const [patentId, setPatentId] = React.useState("");
  const [brand, setBrand] = React.useState("");
  const [model, setModel] = React.useState("");
  const [color, setColor] = React.useState("");
  const [productionYear, setProductionYear] = React.useState("");

  return (
    <ScrollView style={{ flex: 1 }}>
      <LinearGradient colors={["#3043ff", "#df3ac4"]} style={styles.gradient}>
        <Image source={require("../../assets/logo.png")} style={styles.image} />

        <View style={styles.sectionLong}>
          <View style={styles.space}></View>
          <Text style={styles.themeTextShort}>
            Complete los datos del vehiculo:
          </Text>
          <TextInput
            placeholder="Patente"
            value={patentId}
            style={styles.text}
            onChangeText={setPatentId}
          />
          <TextInput
            placeholder="Marca"
            value={brand}
            style={styles.text}
            onChangeText={setBrand}
          />
          <TextInput
            placeholder="Modelo"
            value={model}
            style={styles.text}
            onChangeText={setModel}
          />
          <TextInput
            placeholder="Color"
            value={color}
            style={styles.text}
            onChangeText={setColor}
          />
          <TextInput
            placeholder="Año"
            value={productionYear}
            style={styles.text}
            onChangeText={setProductionYear}
          />
          <TouchableOpacity
            style={styles.containButtonStylel}
            onPress={async () =>
              (await PersistCar({
                patentId,
                brand,
                model,
                color,
                productionYear,
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

export default AddCar;
