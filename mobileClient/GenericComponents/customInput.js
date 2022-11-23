import { useEffect,useState } from 'react';
import { TextInput, HelperText } from "react-native-paper";
import { isValid } from '../Services/validations'

function CustomInput({data,setData,styles}) {

  const[value,setValue]=useState(data.value);
  const[styleValid,setStyleValid]=useState(false)

  const inputTypes = { email:{icon:'email',placeholder:'Email',errorMessage:'Email address is invalid.'}
    ,password:{icon:'lock',placeholder:'Password',errorMessage:'Password length must be 8 characters'}
    ,name:{icon:'eye',placeholder:'Name',errorMessage:'Invalid name'}
    ,lastName:{icon:'eye',placeholder:'Last name',errorMessage:'Invalid last name'}
    ,document:{icon:'book',placeholder:'Document Number',errorMessage:'Document length must be 8 digits'}
    ,phone:{icon:'phone',placeholder:'Phone Number',errorMessage:'Phone length must be 10 digits and bigining with 15'}
    ,patent:{icon:'card',placeholder:'Patent',errorMessage:'Please valid your patent. Eg cccddd or ccdddcc'}
    ,brand:{icon:'car',placeholder:'Brand',errorMessage:'Invalid data'}
    ,model:{icon:'car',placeholder:'Model',errorMessage:'Invalid data'}
    ,color:{icon:'palette',placeholder:'Color',errorMessage:'Invalid data'}
    ,prodYear:{icon:'calendar',placeholder:'Production year',errorMessage:'Year invalid'}
    ,ccard:{icon:'card',placeholder:'Credit Card Number',errorMessage:'Card number length must be 16 digits'}
    ,ccname:{icon:'eye',placeholder:'Credit Card Holder',errorMessage:'Invalid name'}
  };

  useEffect(()=>{
    if(isValid(data.type,value)){
      setData({...data,'value':value,'valid':true});
    }else{
      setData({...data,'value':value,'valid':false});
    }
  },[value]);

  useEffect(()=>{
    if(data.isValidOn){
      if(isValid(data.type,value)){
        setStyleValid(false);
      }else{
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
