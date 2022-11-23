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
          backgroundColor: "#011f44",
          borderRadius: 20,
          width:300,
          height: 250,
          padding: 20,
         
          marginRight: 15,
          marginTop: 10,
        
        }}
      >
        {<Image resizeMode="contain" source={require("../../assets/chip.png")} style={styles.imageCardChip}/>}
        {<Image resizeMode="contain" source={require("../../assets/hologram.png")} style={styles.imageCardChiph}/>}
        {item.company === 'Amex' && <Image resizeMode="contain" source={require("../../assets/Amex.png")} style={styles.imageCard}/>}
        {item.company === 'Master' && <Image resizeMode="contain" source={require("../../assets/master.png")} style={styles.imageCard}/>}
        {item.company === 'Visa' && <Image resizeMode="contain" source={require("../../assets/visa.png")} style={styles.imageCard}/>}
        
        <Text style={{ top: -40,fontSize: 18, color:"white",fontFamily: "Credit" }}>{item.cardNumber}</Text>
        <Text style={{ top: -40,fontSize: 20, color:"white",fontFamily: "TTNorms-Regular" }}>{item.cardName}</Text>
        
        <Text style={{ marginLeft: 200,top: -40,fontSize: 10, color:"white",fontFamily: "Credit" }}>{item.expireDate}</Text>
        
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