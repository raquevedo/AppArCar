import { useState,useContext,useCallback, useEffect } from "react";
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
import CustomInput from '../../GenericComponents/customInput';

function SignInScreen({ navigation }) {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");
  
  const [email,setEmail] = useState({type:"email",value:"",valid:false,isValidOn:false});
  const setInput1Handl = useCallback(val => {setEmail(val)},[setEmail]);
  const [password,setPassword] = useState({type:"password",value:"",valid:false,isValidOn:false});
  const setInput1Handl2 = useCallback(val => {setPassword(val)},[setPassword]);

  function inputsActivator(){
    setEmail({...email,isValidOn:true});
    setPassword({...password,isValidOn:true});
  }

  function login(){
    inputsActivator();
    if(email.valid && password.valid){
      signIn({ email:email.value,password:password.value })
    }
  }

  useEffect(()=>{
   console.log(email);
   console.log(password);
  },[email,password]);

  const { signIn } = useContext(AuthContext);

  return (
    <ScrollView style={{ flex: 1 }}>
      <LinearGradient colors={["#3043ff", "#df3ac4"]} style={styles.gradient}>
        <Image source={require("../../assets/logo.png")} style={styles.image} />

        <View style={styles.section}>
          <View style={styles.space}></View>
          <Text style={styles.themeText}>Hello!</Text>
          <CustomInput styles={styles} data={email} setData={setInput1Handl}></CustomInput>
          <CustomInput styles={styles} data={password} setData={setInput1Handl2}></CustomInput>
          <TouchableOpacity
            style={styles.containButtonStylel}
            onPress={() => login()}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#3043ff", "#df3ac4"]}
              style={styles.buttonStylel}
            >
              <Text style={styles.buttonTextl}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.space}></View>
        </View>
        <View style={styles.space}>
          <TouchableOpacity
            style={styles.containButtonStyleSignUp}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.buttonTextSignUp}>Sign up</Text>
          </TouchableOpacity>
          <Image
            source={require("../../assets/anthem.png")}
            style={styles.imageAnthem}
          />
        </View>
      </LinearGradient>
    </ScrollView>
  );
}
export default SignInScreen;

/*
  <TextInput
    placeholder="Email"
    value={email}
    style={styles.text}
    onChangeText={setEmail}
    error={false}
    left={<TextInput.Icon icon="email" />}
  />
  <TextInput
    placeholder="Password"
    value={password}
    onChangeText={setPassword}
    secureTextEntry
    style={styles.text}
    left={<TextInput.Icon icon="lock" />}
  />    

  onPress={() => signIn({ email, password })}
*/
