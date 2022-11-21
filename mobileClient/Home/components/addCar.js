import {useState, useCallback} from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "../../Services/styles";
import { PersistCar } from "../controllers/car_controller";
import { LinearGradient } from "expo-linear-gradient";
import CustomInput from "../../GenericComponents/customInput";

function AddCar({ navigation }) {

  const [patentId,setPatentId] = useState({type:"patent",value:"",valid:false,isValidOn:false});
  const setInput1Handl = useCallback(val => {setPatentId(val)},[setPatentId]);
  const [brand,setBrand] = useState({type:"brand",value:"",valid:false,isValidOn:false});
  const setInput2Handl = useCallback(val => {setBrand(val)},[setBrand]);
  const [model,setModel] = useState({type:"model",value:"",valid:false,isValidOn:false});
  const setInput3Handl = useCallback(val => {setModel(val)},[setModel]);
  const [color,setColor] = useState({type:"color",value:"",valid:false,isValidOn:false});
  const setInput4Handl = useCallback(val => {setColor(val)},[setColor]);
  const [productionYear,setProductionYear] = useState({type:"prodYear",value:"",valid:false,isValidOn:false});
  const setInput5Handl = useCallback(val => {setProductionYear(val)},[setProductionYear]);

  function inputsActivator(){
    setPatentId(()=>({...patentId,isValidOn:true}));
    setBrand(()=>({...brand,isValidOn:true}));
    setModel(()=>({...model,isValidOn:true}));
    setColor(()=>({...color,isValidOn:true}));
    setProductionYear(()=>({...productionYear,isValidOn:true}));
  }

  async function thisPersistCar(){
    if(patentId.valid && brand.valid && model.valid && color.valid && productionYear.valid){
      const response = await PersistCar({
        patentId:patentId.value,
        brand:brand.value,
        model:model.value,
        color:color.value,
        productionYear:productionYear.value
      });
      const reponseAwait = response;
      navigation.goBack();
    }else{
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
            Please enter data car:
          </Text>
          <CustomInput styles={styles} data={patentId} setData={setInput1Handl}></CustomInput>
          <CustomInput styles={styles} data={brand} setData={setInput2Handl}></CustomInput>
          <CustomInput styles={styles} data={model} setData={setInput3Handl}></CustomInput>
          <CustomInput styles={styles} data={color} setData={setInput4Handl}></CustomInput>
          <CustomInput styles={styles} data={productionYear} setData={setInput5Handl}></CustomInput>
          <TouchableOpacity
            style={styles.containButtonStylel}
            onPress={()=>
              thisPersistCar()
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

export default AddCar;
/*
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

  const [patentId, setPatentId] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [productionYear, setProductionYear] = useState("");

*/