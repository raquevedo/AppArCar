import  * as React from 'react';
import { View, TextInput, Button} from 'react-native';
import { GetUserInfo } from '../../Services/requests';
import { PersistProfile } from '../controllers/profile_controller';

function Profile({navigation}) {
    
    const [name, setName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [documentNumber, setDocument] = React.useState('');
    const [birthDateDt, setBirthday] = React.useState('');
    const [contactNumber, setContactNumber] = React.useState('');
    const [gender, setGender] = React.useState('');

    const loadDataOnlyOnce = async function(){
      const response = await GetUserInfo()
      let respData = await response.json()
      respData = respData.data
      setName(respData.name)
      setLastName(respData.lastName)
      setDocument(respData.documentNumber.toString())
      setBirthday(respData.birthDateDt)
      setContactNumber(respData.contactNumber.toString())
      setGender(respData.gender)   
      console.log(respData)   
    }

    React.useEffect(() => {
      loadDataOnlyOnce()
    },[])

    return (
      <View>
        <TextInput
          placeholder="Nombre"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Apellido"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          placeholder="Documento"
          value={documentNumber}
          onChangeText={setDocument}
        />
        <TextInput
          placeholder="Fecha de Nacimiento"
          value={birthDateDt}
          onChangeText={setBirthday}
        />
        <TextInput
          placeholder="Teléfono móvil"
          value={contactNumber}
          onChangeText={setContactNumber}
        />
        <TextInput
          placeholder="Género"
          value={gender}
          onChangeText={setGender}
        />
        <Button title="Cargar" onPress={() => PersistProfile({name, lastName, documentNumber, birthDateDt, contactNumber, gender})} />
        <Button title="Volver" onPress={() => navigation.goBack()} />
      </View> 
    );  
  }

export default Profile

