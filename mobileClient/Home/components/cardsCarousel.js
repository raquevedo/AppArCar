import React, { useState, useCallback, useRef, useEffect } from "react";
import { Text, View, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import styles from "../../Services/styles";
const exampleItems = [
  {
    numberCard: "98273746682837737",
    imageName: "visa",
  },
  {
    numberCard: "9923482734667737",
    imageName: "master",
  },
];
function CardsCarousel ({payMethod}){
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState([]);
  const ref = useRef(null);
  const renderItem = useCallback(
    ({ item, index }) => (
      <View
        style={{
          backgroundColor: "#3043ff",
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
          marginTop: 10,
          marginBottom: 50
        }}
      >
        <Text style={{ fontSize: 17, color:"white" }}>{item.cardNumber}</Text>
        {item.imageName=="visa" && <Image source={require("../../assets/visa.png")} style={styles.imageCard}/>}
        {item.imageName=="master" && <Image source={require("../../assets/master.png")} style={styles.imageCard}/>}
      </View>
    ),
    []
  );

  useEffect(()=>{
    setCarouselItems(payMethod)
  },[payMethod]);
  
  return (
      <Carousel
        layout="default"
        ref={ref}
        data={carouselItems}
        sliderWidth={300}
        itemWidth={300}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
  );
};

export default CardsCarousel;