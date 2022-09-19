import  * as React from 'react';
import { View, TextInput, Button} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import host_instance from '../../host_instance.json';

async function PersistProfile(data){
  const userToken = await SecureStore.getItemAsync('tk');
  const id = data.id
  delete data.id
  data.documentNumber=parseInt(data.documentNumber)
  data.contactNumber=parseInt(data.contactNumber)
  const fetchData={}
  fetchData.method= 'PATCH'
  fetchData.body= JSON.stringify(data)
  fetchData.headers={
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+userToken
    }

  data.documentNumber=parseInt(data.documentNumber)
  data.contactNumber=parseInt(data.contactNumber)

  console.log('Data to register:',fetchData,'path:',host_instance.path+'/user/car-drivers/'+id)
  fetch(host_instance.path+'/user/car-drivers/'+id,fetchData)
  .then(async function(response){
    if(response.status != 204){
      console.log("Error")
      alert("Error, por favor verifique los datos ingresados")
    }else{
      //const dataRes = await response.json();
      console.log('Update profile is success')
      alert('Sus datos fueron actualizados con éxito')
      
    }
  })
}

function Profile({navigation}) {
    
    const [id, setId] = React.useState('');
    const [name, setName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [documentNumber, setDocument] = React.useState('');
    const [birthDateDt, setBirthday] = React.useState('');
    const [contactNumber, setContactNumber] = React.useState('');
    const [gender, setGender] = React.useState('');

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
      setId(respData.id)
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
        <Button title="Cargar" onPress={() => PersistProfile({id, name, lastName, documentNumber, birthDateDt, contactNumber, gender})} />
      </View> 
    );  
  }

export default Profile

