import  * as React from 'react';
import { View, TextInput, Button} from 'react-native';
import { GetUserInfo } from '../../Services/requests';
import { PersistCar } from '../controllers/car_controller';

function AddCar({navigation}) {
    
    const [patentId, setPatentId] = React.useState('');
    const [brand, setBrand] = React.useState('');
    const [model, setModel] = React.useState('');
    const [color, setColor] = React.useState('');
    const [productionYear, setProductionYear] = React.useState('');

    return (
      <View>
        <TextInput
          placeholder="Patente"
          value={patentId}
          onChangeText={setPatentId}
        />
        <TextInput
          placeholder="Marca"
          value={brand}
          onChangeText={setBrand}
        />
        <TextInput
          placeholder="Modelo"
          value={model}
          onChangeText={setModel}
        />
        <TextInput
          placeholder="Color"
          value={color}
          onChangeText={setColor}
        />
        <TextInput
          placeholder="Año"
          value={productionYear}
          onChangeText={setProductionYear}
        />
        <Button title="Guardar" onPress={() => PersistCar({patentId,brand,model,color,productionYear}) & navigation.goBack()} />
      </View> 
    );  
  }

export default AddCar
