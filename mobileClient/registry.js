import  * as React from 'react';
import { View, TextInput, Button} from 'react-native';
import { AuthContext } from './context'

function FormReg({navigation}) {
    const [name, setname] = React.useState('');
    const [lastName, setlastName] = React.useState('');
    const [patent, setpatent] = React.useState('');
    const [city, setcity] = React.useState('');
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
          placeholder="city"
          value={city}
          onChangeText={setcity}
        />
        
        <Button title="Cargar" onPress={() => register({registered})} />
      </View>
    );
  }
  export default FormReg;