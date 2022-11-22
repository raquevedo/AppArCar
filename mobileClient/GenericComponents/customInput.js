import { useEffect,useState } from 'react';
import { TextInput, HelperText } from "react-native-paper";

function CustomInput({data,setData,styles}) {

  const[value,setValue]=useState(data.value);
  const[styleValid,setStyleValid]=useState(false)

  const inputTypes = { email:{icon:'email',placeholder:'Email',errorMessage:'Email address is invalid.'}
    ,password:{icon:'lock',placeholder:'Password',errorMessage:'Password length must be 8 characters'}
    ,name:{icon:'eye',placeholder:'Name',errorMessage:'Invalid name'}
    ,lastName:{icon:'eye',placeholder:'Last name',errorMessage:'Invalid last name'}
    ,document:{icon:'book',placeholder:'Document Number',errorMessage:'Document length must be 8 digits'}
    ,phone:{icon:'phone',placeholder:'Phone Number',errorMessage:'Phone length must be 10 digits and bigining witf 15'}
    ,patent:{icon:'card',placeholder:'Patent',errorMessage:'Please valid your patent. Eg cccddd or ccdddcc'}
    ,brand:{icon:'car',placeholder:'Brand',errorMessage:'Invalid data'}
    ,model:{icon:'car',placeholder:'Model',errorMessage:'Invalid data'}
    ,color:{icon:'palette',placeholder:'Color',errorMessage:'Invalid data'}
    ,prodYear:{icon:'calendar',placeholder:'Production year',errorMessage:'Year invalid'}
    ,ccard:{icon:'card',placeholder:'Credit Card Number',errorMessage:'Card number length must be 16 digits'}
    ,ccname:{icon:'eye',placeholder:'Credit Card Holder',errorMessage:'Invalid name'}
  };

  function isValid(type,str){
    const mailRegex = new RegExp( /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ );
    const ccard = new RegExp( /^\d{16}$/ );
    const password = new RegExp( /\w{8}\w*/ );
    const name = new RegExp( /^[a-zA-Z]{3}[a-zA-Z]*$/ );
    const lastName = new RegExp( /^[a-zA-Z]{3}[a-zA-Z]*$/ );
    const document = new RegExp( /^\d{8}$/ );
    const phone = new RegExp( /^15\d{8}$/ );
    const patent = new RegExp( /^[a-zA-Z]{2}\d{3}[a-zA-Z]{2}$|^[a-zA-Z]{3}\d{3}$/ );
    const genericWords = new RegExp( /\w/ );
    const year = new RegExp( /^19\d{2}$|^20\d{2}$/ );
    const ccname = new RegExp( /[a-zA-Z]{4}[a-zA-Z]*/ );
    if((type === 'email' && mailRegex.test(str)) ||
        (type === 'password' && password.test(str)) ||
          (type === 'name' && name.test(str)) ||
            (type === 'lastName' && lastName.test(str)) ||
              (type === 'document' && document.test(str)) ||
                (type === 'phone' && phone.test(str)) ||
                  (type === 'patent' && patent.test(str)) ||
                   ((type === 'model' || type === 'brand' || type === 'color') && genericWords.test(str)) ||
                     (type === 'prodYear' && year.test(str)) ||
                      (type === 'ccard' && ccard.test(str)) ||
                        (type === 'ccname' && ccname.test(str))){
      return true;
    }else{
      return false;
    }
  }

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
