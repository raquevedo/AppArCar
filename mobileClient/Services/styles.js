import { StyleSheet, Dimensions } from "react-native";

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
  themeTextFlat2: {
    flex: 1,
    fontSize: 20,
    fontFamily: "TTNorms-BoldItalic",
    textAlign: "center",
    color: "green",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -25,
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
  buttonPatent: {
    borderWidth: 5,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "LicensePlate",
    width: 150,
    height: 50,
    backgroundColor: "black",
    borderRadius: 50,
  },
  textPatent: {
    
    fontFamily: "LicensePlate",
    backgroundColor: "black",
    borderColor: "black",
    color: "white",
    marginTop: 5,
    borderWidth: 3,
    fontSize: 30,
    
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
  containButtonStyleDate: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gray",
    width: 200,
    height: 50,
    borderRadius: 50,
    margin: 20,
  },
  containButtonStyleDateError: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "red",
    width: 200,
    height: 50,
    borderRadius: 50,
    margin: 20,
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
  imageCard: {
    flex: 1,
    width: 200,
    height: 100,
  },
  
  imageGoogle: {
    flex: 1,
    resizeMode: "contain",
  },
  textDate: {
    fontSize: 17,
    justifyContent: "center",
    fontFamily: "TTNorms-Regular",
    alignItems: "center",
    color: "grey",
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
  dropdownError: {
    width: 210,
    height: 50,
    borderBottomColor: 'red',
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
  subheading2: {
    fontSize: 18,
    color: 'red',
    fontFamily: "TTNorms-Regular",
  },
  subheading3: {
    marginBottom:10,
    fontSize: 18,
    color: 'grey',
    fontFamily: "TTNorms-Regular",
  },
  itemSeparator: {
    backgroundColor: 'grey',
    height: 1,
  },
  inputView: {
    backgroundColor: 'rgba(0,0,0,0)',
      position: 'absolute', 
      top: 0,
      left: 5,
      right: 5,
      marginTop: 40,
      borderRadius: 20,
      justifyContent: "center",
        alignItems: "center",
      
  },
    input: {
        height: 48,
        padding: 10,
        marginTop: 60,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#48BBEC',
        backgroundColor: 'white',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        position: 'absolute', 
    },
    modalView: {
        margin: 130,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    placeholderStyles: {
      color: "grey",
    },
    dropdownGender: {
      marginHorizontal: 10,
      width: "50%",
      marginBottom: 15,
    },
});
export default styles;
