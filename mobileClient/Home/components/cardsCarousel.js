import React, { useState, useCallback, useRef, useEffect } from "react";
import { Text, View, Image } from "react-native";
import Carousel from "react-native-snap-carousel";
import styles from "../../Services/styles";
import { PaymentContext } from "../../Services/paymentContext";

function CardsCarousel ({payMethod}){
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState([]);
  const { setSelectedPayment } = React.useContext(PaymentContext);


  function getActiveItem(index){
    if(carouselItems.length != 0){
      return carouselItems[index]
    }else{
      return {}
    }
  }

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
        onSnapToItem={(index) => setActiveIndex(index) & 
          setSelectedPayment(getActiveItem(index).cardNumber)}
      />
  );
};

export default CardsCarousel;