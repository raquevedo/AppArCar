import  * as React from 'react';
import { View, TextInput, Button} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import host_instance from '../../host_instance.json';

function Profile({navigation}) {
    
    const [name,setName] = React.useState('');

    const loadDataOnlyOnce = async function(){
      const token = await SecureStore.getItemAsync('tk');
      const fetchData={}
      fetchData.method= 'GET'
      fetchData.headers={
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer '+token
      }
      
      const response = await fetch(host_instance.path+'/user/car-drivers/user-info',fetchData)
      const respData = await response.json()
      console.log('nombre:',respData.name)
      setName(respData.name);
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
        
        <Button title="Cargar" onPress={() => console.log('perfil')} />
      </View> 
    );  
  }
  export default Profile;
/*<TextInput
          placeholder="Apellido"
          value={lastName}
          onChangeText={setlastName}
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
        />*/