import  * as React from 'react';
import { View, TextInput, Button} from 'react-native';
<<<<<<< HEAD:mobileClient/Components/registry.js
import { AuthContext } from '../context'
=======
import { AuthContext } from '../../Services/context'
>>>>>>> dcc6a522dad7d257cca72244580342802a95a0ac:mobileClient/Login/components/registry.js

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
  

    const { register } = React.useContext(AuthContext);
    const { signOut } = React.useContext(AuthContext);
    
    return (
      <View>
        <TextInput
          placeholder="Nombre"
          value={name}
          onChangeText={setname}
        />
        <TextInput
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
        />
        <Button title="Cargar" onPress={() => register({ name, lastName, documentNumber, birthDateDt, contactNumber, gender })} />
        <Button title="Sign out" onPress={() => signOut({})} />
      </View> 
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