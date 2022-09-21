import  * as React from 'react';
import { View, TextInput, Button} from 'react-native';
import { GetUserInfo } from '../../Services/requests';
import { DeleteCar, GetCars, UpdateCar } from '../controllers/car_controller';

function EditCar({route, navigation}) {
  
    const { idCar } = route.params;
    const [id, setIdCar] = React.useState('');
    const [patentId, setPatentId] = React.useState('');
    const [brand, setBrand] = React.useState('');
    const [model, setModel] = React.useState('');
    const [color, setColor] = React.useState('');
    const [productionYear, setProductionYear] = React.useState('');
    const loadDataOnlyOnce = async function(){
      const response = await GetCars()
      const respData = await response.json()
      //console.log(respData)
      const car=respData.find(x => x.id === idCar)
      //respData = respData.data
      setIdCar(car.id.toString())
      setPatentId(car.patentId)
      setBrand(car.brand)
      setModel(car.model)
      setColor(car.color)
      setProductionYear(car.productionYear.toString()) 
      console.log(respData)
    }

    React.useEffect(() => {
      loadDataOnlyOnce()
    },[])

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
        <Button title="Guardar" onPress={() => UpdateCar({id,patentId,brand,model,color,productionYear})} />
        <Button title="Borrar automovil" onPress={() => DeleteCar(id) & navigation.goBack()} />
      </View> 
    );  
  }

export default EditCar
