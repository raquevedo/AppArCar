import  * as React from 'react';
import { View, Text, Button, FlatList} from 'react-native';
import { GetUserInfo } from '../../Services/requests';
import { GetCars } from '../controllers/car_controller';
import { PersistProfile } from '../controllers/profile_controller';
import { useIsFocused } from '@react-navigation/native';


function Cars({navigation}) {
  
  const [cars,setCars] = React.useState([])
  const focus = useIsFocused();

  React.useEffect(() => {
    console.log(focus)
    const getCars = async () => {
    const response = await GetCars()
    const resData = await response.json()
    console.log(resData)
    setCars(resData)
    }
    if(focus){
      getCars()
    }
  },[focus])
  
  
  return (
    <View>
      <FlatList
        data={cars}
        renderItem={({ item }) => (
          <Text>{item.brand} {item.model}</Text>
        )}
      />
      <Button title="Registrar automovil" onPress={() => navigation.navigate("AddCar")} />
    </View> 
    );  
  }

export default Cars

