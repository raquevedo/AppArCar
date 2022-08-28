import  * as React from 'react';
import { View, TextInput, Button} from 'react-native';
import { AuthContext } from './contexto'

function FormReg({navigation}) {
    const [nombre, setNombre] = React.useState('');
    const [apellido, setApellido] = React.useState('');
    const [patente, setPatente] = React.useState('');
    const [ciudad, setciudad] = React.useState('');
    const { registroOk } = React.useContext(AuthContext);
    const registro=true;
    return (
      <View>
        <TextInput
          placeholder="nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          placeholder="apellido"
          value={apellido}
          onChangeText={setApellido}
        />
        <TextInput
          placeholder="patente"
          value={patente}
          onChangeText={setPatente}
        />
         <TextInput
          placeholder="ciudad"
          value={ciudad}
          onChangeText={setciudad}
        />
        
        <Button title="Cargar" onPress={() => registroOk({registro})} />
      </View>
    );
  }
  export default FormReg;