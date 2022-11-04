import * as React from "react";
import { View, Button, ScrollView, Text, TouchableOpacity,Image } from "react-native";
import { GetUserInfo } from "../../Services/requests";
import { LinearGradient } from "expo-linear-gradient";
import { DeleteCar, GetCars, UpdateCar } from "../controllers/car_controller";
import styles from "../../Services/styles";
import { TextInput } from "react-native-paper";

function EditCar({ route, navigation }) {
  const { idCar } = route.params;
  const [id, setIdCar] = React.useState("");
  const [patentId, setPatentId] = React.useState("");
  const [brand, setBrand] = React.useState("");
  const [model, setModel] = React.useState("");
  const [color, setColor] = React.useState("");
  const [productionYear, setProductionYear] = React.useState("");
  const loadDataOnlyOnce = async function () {
    const response = await GetCars();
    const respData = await response.json();
    //console.log(respData)
    const car = respData.find((x) => x.id === idCar);
    //respData = respData.data
    setIdCar(car.id.toString());
    setPatentId(car.patentId);
    setBrand(car.brand);
    setModel(car.model);
    setColor(car.color);
    setProductionYear(car.productionYear.toString());
    console.log(respData);
  };

  React.useEffect(() => {
    loadDataOnlyOnce();
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <LinearGradient colors={["#3043ff", "#df3ac4"]} style={styles.gradient}>
      <Image source={require("../../assets/logo.png")} style={styles.image} />
        <View style={styles.sectionLong}>
          <View style={styles.space}></View>
          <Text style={styles.themeTextShort}>
            Actualice los datos:
          </Text>
          <TextInput
            placeholder="Patente"
            value={patentId}
            onChangeText={setPatentId}
            style={styles.text}
          />
          <TextInput
            placeholder="Marca"
            value={brand}
            onChangeText={setBrand}
            style={styles.text}
          />
          <TextInput
            placeholder="Modelo"
            value={model}
            onChangeText={setModel}
            style={styles.text}
          />
          <TextInput
            placeholder="Color"
            value={color}
            onChangeText={setColor}
            style={styles.text}
          />
          <TextInput
            placeholder="Año"
            value={productionYear}
            onChangeText={setProductionYear}
            style={styles.text}
          />

          <TouchableOpacity
            style={styles.containButtonStylel}
            onPress={() =>
              UpdateCar({ id, patentId, brand, model, color, productionYear })
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
        <TouchableOpacity
          style={styles.containButtonStyle}
          onPress={() => DeleteCar(id) & navigation.goBack()}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 0 }}
            colors={["red", "#df3ac4"]}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonText}>Borrar</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.space}></View>
      </LinearGradient>
    </ScrollView>
  );
}

export default EditCar;
