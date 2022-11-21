import { useEffect,useState,useCallback } from "react";
import { View, ScrollView, Text, TouchableOpacity,Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { DeleteCar, GetCars, UpdateCar } from "../controllers/car_controller";
import styles from "../../Services/styles";
import CustomInput from "../../GenericComponents/customInput";


function EditCar({ route, navigation }) {
  const { car } = route.params;
  const [id, setIdCar] = useState("");

  const [patentId,setPatentId] = useState({type:"patent",value:car.patentId,valid:false,isValidOn:true});
  const setInput1Handl = useCallback(val => {setPatentId(val)},[setPatentId]);
  const [brand,setBrand] = useState({type:"brand",value:car.brand,valid:false,isValidOn:true});
  const setInput2Handl = useCallback(val => {setBrand(val)},[setBrand]);
  const [model,setModel] = useState({type:"model",value:car.model,valid:false,isValidOn:true});
  const setInput3Handl = useCallback(val => {setModel(val)},[setModel]);
  const [color,setColor] = useState({type:"color",value:car.color,valid:false,isValidOn:true});
  const setInput4Handl = useCallback(val => {setColor(val)},[setColor]);
  const [productionYear,setProductionYear] = useState({type:"prodYear",value:car.productionYear.toString(),valid:false,isValidOn:true});
  const setInput5Handl = useCallback(val => {setProductionYear(val)},[setProductionYear]);

  useEffect(()=>{
    setIdCar(car.id.toString());
  },[]);


  return (
    <ScrollView style={{ flex: 1 }}>
      <LinearGradient colors={["#3043ff", "#df3ac4"]} style={styles.gradient}>
      <Image source={require("../../assets/logo.png")} style={styles.image} />
        <View style={styles.sectionLong}>
          <View style={styles.space}></View>
          <Text style={styles.themeTextShort}>
            Update your data:
          </Text>
          <CustomInput styles={styles} data={patentId} setData={setInput1Handl}></CustomInput>
          <CustomInput styles={styles} data={brand} setData={setInput2Handl}></CustomInput>
          <CustomInput styles={styles} data={model} setData={setInput3Handl}></CustomInput>
          <CustomInput styles={styles} data={color} setData={setInput4Handl}></CustomInput>
          <CustomInput styles={styles} data={productionYear} setData={setInput5Handl}></CustomInput>
          <TouchableOpacity
            style={styles.containButtonStylel}
            onPress={() =>
              UpdateCar({ id, patentId:patentId.value, brand:brand.value, model:model.value, color:color.value, productionYear:productionYear.value })
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
            <Text style={styles.buttonText}>Delete</Text>
          </LinearGradient>
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
}

export default EditCar;
/*
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
          />*/

          /*const loadDataOnlyOnce = async function () {
    const response = await GetCars();
    const respData = await response.json();
    
    const car = respData.find((x) => x.id === idCar);
   
    setIdCar(car.id.toString());
    setPatentId(()=>({...patentId,value:car.patentId}));
    setBrand(()=>({...brand,value:car.brand}));
    setModel(()=>({...model,value:car.model}));
    setColor(()=>({...color,value:car.color}));
    setProductionYear(()=>({...productionYear,value:car.productionYear.toString()}));
    console.log(respData);
  };
  /*
  useEffect(() => {
    loadDataOnlyOnce();
  }, []);*/
