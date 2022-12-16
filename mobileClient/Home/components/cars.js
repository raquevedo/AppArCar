import * as React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image
} from "react-native";
import { GetUserInfo } from "../../Services/requests";
import { GetCars } from "../controllers/car_controller";
import { PersistProfile } from "../controllers/profile_controller";
import { useIsFocused } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../../Services/styles";

function Cars({ navigation }) {
  const [cars, setCars] = React.useState([]);
  const focus = useIsFocused();

  emptyListView = () => {
    return (
      <View>
        <Text style={{ fontFamily: "TTNorms-Regular",fontSize: 30 }}>
          No cars set up
        </Text>
      </View>
    );
  };

  renderSeparator = () => {
    return <View style={styles.itemSeparator}></View>;
  };

  React.useEffect(() => {
    console.log(focus);
    const getCars = async () => {
      const response = await GetCars();
      const resData = await response.json();
      console.log(resData);
      setCars(resData);
    };
    if (focus) {
      getCars();
    }
  }, [focus]);

  return (
    <LinearGradient colors={["#3043ff", "#df3ac4"]} style={styles.gradient}>
      <Image source={require("../../assets/logo.png")} style={styles.image} />
      <SafeAreaView style={styles.sectionLong}>
        <View style={styles.space}></View>
        <Text style={styles.themeTextFlat}>Your cars</Text>
        <View style={styles.containFlat}>
          <FlatList
            ListEmptyComponent={emptyListView}
            ItemSeparatorComponent={renderSeparator}
            data={cars}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View style={styles.flatlist}>
                  <Text
                    style={styles.textFlatList}
                    onPress={() =>
                      navigation.navigate("EditCar", { car: item })
                    }
                  >
                    <View style={styles.containTextFlatList}>
                    <Text style={styles.heading2}>{item.patentId}</Text>
                    
                    <Text style={styles.subheading}>{item.brand +' '+item.model +' '+ item.productionYear}</Text>
                    </View>
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.space}></View>
        <TouchableOpacity
          style={styles.containButtonStyleFlat}
          onPress={() => navigation.navigate("AddCar")}
        >
          <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={["#df3ac4", "#3043ff"]}
            style={styles.buttonStyleFlat}
          >
            <Text style={styles.buttonText}>Add car</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.space}></View>
      </SafeAreaView>
      <View style={styles.space}>
        <TouchableOpacity
          style={styles.containButtonStyle}
          onPress={() => navigation.navigate("Home")}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 0 }}
            colors={["#3043ff", "#df3ac4"]}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonText}>Back</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

export default Cars;
