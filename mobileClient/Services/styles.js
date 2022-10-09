import { StyleSheet, Text, View, Alert, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  themeText: {
    flex: 4,
    fontSize: 40,
    fontFamily: "TTNorms-BoldItalic",
    textAlign: "center",
    color: "#5741f2",
    justifyContent: "center",
    alignItems: "center",
  },
  themeTextFlat: {
    flex: 1,
    fontSize: 40,
    fontFamily: "TTNorms-BoldItalic",
    textAlign: "center",
    color: "#5741f2",
    justifyContent: "center",
    alignItems: "center",
  },
  themeTextShort: {
    flex: 4,
    fontSize: 30,
    textAlign: "center",
    fontFamily: "TTNorms-Regular",
    color: "#5741f2",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextl: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "TTNorms-Regular",
    color: "#ffffff",
    backgroundColor: "transparent",
  },
  
  buttonTextSignUp: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "TTNorms-Regular",
    color: "#5741f2",
    backgroundColor: "transparent",
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "TTNorms-Regular",
    color: "#ffffff",
    backgroundColor: "transparent",
  },
  wrapperButton: {
    flex: 1,
    display: "flex",
    flexdirection: "row",
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    backgroundColor: "#1e41ff",
    margin: 5,
    borderRadius: 50,
  },
  imageButton: {
    height:60,
    width: 60,
    borderRadius: 64
  },
  containButtonHome: {
    flex: 1,
    padding: 20,
    flexdirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    position:'absolute'
  },
  containAnthem: {
    alignItems: "center",
    justifyContent: "center",
  },
  imageAnthem: {
    alignItems: "center",
    width: 250,
    height: 80,
    justifyContent: "center",
    resizeMode: "contain",
  },
  containButtonStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  containButtonStyleSignUp: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    width: 100,
    height: 50,
    backgroundColor: "white",
  },
  buttonStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 50,
    backgroundColor: "transparent",
    borderRadius: 50,
  },
  buttonStyleFlat: {
    flex: 1,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 40,
    backgroundColor: "transparent",
    borderRadius: 50,
  },
  containButtonStyleFlat: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containButtonStylel: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStylel: {
    flex: 4,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 50,
    backgroundColor: "transparent",
    borderRadius: 50,
  },

  text: {
    flex: 4,
    fontSize: 16,
    textAlign: "center",
    fontFamily: "TTNorms-Light",
    width: "70%",
    margin: 10,
    color: "#5741f2",
    backgroundColor: "transparent",
  },

  section: {
    flex: 2,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 330,
    height: 150,
    backgroundColor: "white",
    borderRadius: 40,
  },
  sectionLong: {
    flex: 6,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 330,
    height: 150,
    backgroundColor: "white",
    borderRadius: 40,
  },
  image: {
    flex: 1,
    width: 380,
    height: 120,
    resizeMode: "contain",
  },
  
  imageGoogle: {
    flex: 1,
    resizeMode: "contain",
  },
  textDate: {
    fontSize: 12,
    justifyContent: "center",
    fontFamily: "TTNorms-Regular",
    alignItems: "center",
    color: "#ffffff",
  },
  space: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    width:'100%', 
    height: windowHeight,
    justifyContent: "center",
    alignItems: "center", 
  },
  dropdown: {
    width: 210,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  
  containFlat: {
    
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  flatlist: {
    
    paddingVertical: 30,
    paddingHorizontal: 10,
    width: 250,
    
  },
  containTextFlatList:{
    justifyContent: 'space-between',
    
  },
  heading2: {
    fontSize: 30,
    fontFamily: "TTNorms-BoldItalic",
  },
  subheading: {
    fontSize: 18,
    color: 'grey',
    fontFamily: "TTNorms-Regular",
  },
  itemSeparator: {
    backgroundColor: 'grey',
    height: 1,
  },
});
export default styles;
