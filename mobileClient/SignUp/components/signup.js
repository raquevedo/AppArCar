import {useState, useContext, useCallback} from "react";
import {
  View,
  Button,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AuthContext } from "../../Services/context";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-paper";
import styles from "../../Services/styles";
import CustomInput from '../../GenericComponents/customInput';

function SignUpScreen({ navigation }) {
  /*const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");*/

  const [username, setUsername] = useState({type:"name",value:"",valid:false,isValidOn:false});
  const setInput1Handl = useCallback(val => {setUsername(val)},[setUsername]);
  const [email,setEmail] = useState({type:"email",value:"",valid:false,isValidOn:false});
  const setInput2Handl = useCallback(val => {setEmail(val)},[setEmail]);
  const [password,setPassword] = useState({type:"password",value:"",valid:false,isValidOn:false});
  const setInput3Handl = useCallback(val => {setPassword(val)},[setPassword]);

  const { signUp } = useContext(AuthContext);

  function inputsActivator(){
    setUsername({...username,isValidOn:true});
    setEmail({...email,isValidOn:true});
    setPassword({...password,isValidOn:true});
  }
  function thisSignUp(){
    if(email.valid && password.valid){
      signUp({ username:username.value, email:email.value, password:password.value });
      navigation.goBack();
    }else{
      inputsActivator();
    }
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <LinearGradient colors={["#3043ff", "#df3ac4"]} style={styles.gradient}>
        <Image source={require("../../assets/logo.png")} style={styles.image} />
        <View style={styles.section}>
          <View style={styles.space}></View>
          <Text style={styles.themeText}>Sign Up</Text>
          <CustomInput styles={styles} data={username} setData={setInput1Handl}></CustomInput>
          <CustomInput styles={styles} data={email} setData={setInput2Handl}></CustomInput>
          <CustomInput styles={styles} data={password} setData={setInput3Handl}></CustomInput>
          <TouchableOpacity
            style={styles.containButtonStyle}
            onPress={() =>
              thisSignUp()
            }
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#3043ff", "#df3ac4"]}
              style={styles.buttonStyle}
            >
              <Text style={styles.buttonText}>Sign up</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.space}></View>
        </View>
        <View style={styles.space}></View>
      </LinearGradient>
    </ScrollView>
  );
}
export default SignUpScreen;

/**
 <TextInput
    placeholder="Username"
    value={username}
    onChangeText={setUsername}
    style={styles.text}
    left={<TextInput.Icon icon="eye" />}
  />
  <TextInput
    placeholder="Email"
    value={email}
    onChangeText={setEmail}
    style={styles.text}
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
 */
