import  * as React from 'react';
import { View, Button,Text,Image} from 'react-native';
import { AuthContext } from '../../Services/context';
import styles from '../../Services/styles';
import { TextInput } from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';
import DatePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

function FormReg({navigation}) {
    const [name, setname] = React.useState('');
    const [lastName, setlastName] = React.useState('');
    //const [patent, setpatent] = React.useState('');
    const [documentNumber, setDocument] = React.useState('');
    const [birthDateDt, setBirthday] = React.useState('');
    //const [residence, setResidence] = React.useState('');
    const [contactNumber, setContactNumber] = React.useState('');
    //const [brandCar, setBrandCar] = React.useState('');
    //const [modelCar, setModelCar] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (birthDateDt) => {
      setBirthday(birthDateDt);
      hideDatePicker();
    };

    const { register } = React.useContext(AuthContext);
    const { signOut } = React.useContext(AuthContext);
    
    return (
      <LinearGradient colors={['#3043ff','#df3ac4']} style={styles.linearGradient}>
        <Image source={require('../../assets/logo.png')}  style={styles.image}/>
        <View style={styles.sectionlong}>
          <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}></View>
          <Text style={styles.themetextshort} >Complete sus datos:</Text>
            <TextInput
              placeholder="Nombre"
              value={name}
              onChangeText={setname}
              style={styles.text}
              left={<TextInput.Icon icon="eye" />}
            />
            <TextInput
              placeholder="Apellido"
              value={lastName}
              onChangeText={setlastName}
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
            
            <TextInput
              placeholder="Teléfono móvil"
              value={contactNumber}
              onChangeText={setContactNumber}
              style={styles.text}
              left={<TextInput.Icon icon="phone" />}
            />
            
            <TextInput
              placeholder="Género"
              value={gender}
              onChangeText={setGender}
              style={styles.text}
              
            />

            <Text>{`Date:  ${birthDateDt? moment(birthDateDt).format("MM/DD/YYYY"):"--/--/--"}`}</Text>
            <LinearGradient start={{x: 0, y: 1}} end={{x: 0, y: 0}} colors={['#df3ac4','#3043ff']} style={styles.buttonstylel} >
                    <Text  style={{fontSize: 12,justifyContent: 'center',alignItems: 'center',color: '#ffffff'}} onPress={showDatePicker}>Fecha de Nacimiento</Text>
            </LinearGradient>
            
            <DatePicker
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} colors={['#df3ac4','#3043ff']} style={styles.buttonstylel}>
                    <Text style={styles.buttonText} onPress={() => register({ name, lastName, documentNumber, birthDateDt, contactNumber, gender })}>Send</Text>
            </LinearGradient>
            <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}></View>
        </View>
        <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
                  <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#df3ac4','#3043ff']} style={styles.buttonstyle}>
                    <Text style={styles.buttonText} onPress={() => signOut({})}>Sign out</Text>
                  </LinearGradient>
        </View>
      </LinearGradient>
    );  
  }
  export default FormReg;

  /*
 <TextInput
          placeholder="patete"
          value={brandCar}
          onChangeText={setBrandCar}
        />
        <TextInput
          placeholder="modelCar"
          value={modelCar}
          onChangeText={setModelCar}
        />
        <TextInput
          placeholder="residence"
          value={residence}
          onChangeText={setResidence}
        />
        <TextInput
          placeholder="patent"
          value={patent}
          onChangeText={setpatent}
        />
  */