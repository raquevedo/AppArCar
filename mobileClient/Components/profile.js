import  * as React from 'react';
import { View, TextInput, Button} from 'react-native';
import { AuthContext } from '../context'

function Profile({navigation}) {
    const [name, setname] = React.useState('');
    const [lastName, setlastName] = React.useState('');
    const [patent, setpatent] = React.useState('');
    const [document, setDocument] = React.useState('');
    const [birthday, setBirthday] = React.useState('');
    const [residence, setResidence] = React.useState('');
    const [mobile, setMobile] = React.useState('');
    const [brandCar, setBrandCar] = React.useState('');
    const [modelCar, setModelCar] = React.useState('');

    function mensaje(){
        alert("actualizado");
    }

    const { register } = React.useContext(AuthContext);
    const registered=true;
    return (
      <View>
        <TextInput
          placeholder="name"
          value={name}
          onChangeText={setname}
        />
        <TextInput
          placeholder="lastName"
          value={lastName}
          onChangeText={setlastName}
        />
        <TextInput
          placeholder="patent"
          value={patent}
          onChangeText={setpatent}
        />
         <TextInput
          placeholder="document"
          value={document}
          onChangeText={setDocument}
        />
        <TextInput
          placeholder="birthday"
          value={birthday}
          onChangeText={setBirthday}
        />
        <TextInput
          placeholder="residence"
          value={residence}
          onChangeText={setResidence}
        />
        <TextInput
          placeholder="mobile"
          value={mobile}
          onChangeText={setMobile}
        />
        <TextInput
          placeholder="brandCar"
          value={brandCar}
          onChangeText={setBrandCar}
        />
        <TextInput
          placeholder="modelCar"
          value={modelCar}
          onChangeText={setModelCar}
        />
        
        <Button title="Actualizar" onPress={() => mensaje() & navigation.goBack()} />
      </View>
    );
  }
  export default Profile;
