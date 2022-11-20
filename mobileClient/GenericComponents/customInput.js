import { View } from 'react-native';
import { useEffect,useState } from 'react';
import { TextInput, HelperText } from "react-native-paper";

function CustomInput({data,setData,styles}) {

  const[value,setValue]=useState("");
  const[styleValid,setStyleValid]=useState(false)

  const inputTypes = { email:{icon:'email',placeholder:'Email',errorMessage:'Email address is invalid.'}
  ,password:{icon:'lock',placeholder:'Password',errorMessage:'Password must been 8 characters min.'} };

  function isValid(type,str){
    const mailRegex = new RegExp( /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ );
    const creditCardRegex = new RegExp( /^\d{15}$/ );
    const password = new RegExp( /\w{8}\w*/ );
    if((type === 'email' && mailRegex.test(str)) ||
          (type === 'password' && password.test(str))){
      return true;
    }else{
      return false;
    }
  }

  useEffect(()=>{
    if(data.isValidOn){
      if(isValid(data.type,value)){
        setData({...data,'value':value,'valid':true});
        setStyleValid(false);
      }else{
        setData({...data,'value':value,'valid':false});
        setStyleValid(true);
      }
    }
  },[value,data.isValidOn]);

  return (
      <>
      <TextInput
        error={styleValid}
        placeholder={inputTypes[data.type].placeholder}
        value={value}
        onChangeText={setValue}
        style={styles.text}
        left={<TextInput.Icon icon={inputTypes[data.type].icon } iconColor="#ff0000"/>}
        {...( data.type==='password' && {secureTextEntry:true })}
      />
      <HelperText type="error" visible={styleValid}>
        {inputTypes[data.type].errorMessage}
      </HelperText>
      </>
  );
}

export default CustomInput;
/* <TextInput
    placeholder="Email"
    value={email}
    style={styles.text}
    onChangeText={setEmail}
    error={false}
    left={<TextInput.Icon icon="email" />}
  */
