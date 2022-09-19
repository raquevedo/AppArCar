import { StyleSheet, Text, View, Alert } from 'react-native';




const styles = StyleSheet.create({
    themetext: {
      flex: 4,
      fontSize: 40,
      textAlign: 'center',
      color: '#5741f2',
      justifyContent: 'center',
      alignItems: 'center'
  },
  themetextshort: {
    flex: 4,
    fontSize: 30,
    textAlign: 'center',
    color: '#5741f2',
    justifyContent: 'center',
    alignItems: 'center'
},
  buttonTextl: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapperbutton: {
    flex: 1,
    display: 'flex',
    flexdirection: 'row'
  },
  buttonstyle: {
      borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:100,
       height:50,
       backgroundColor:'transparent',
       borderRadius:50,
  },
  buttonstylel: {
    flex:4,
    borderWidth:1,
     borderColor:'rgba(0,0,0,0.2)',
     alignItems:'center',
     justifyContent:'center',
     width:150,
     height:50,
     backgroundColor:'transparent',
     borderRadius:50,
},

  text: {
    flex: 4,
    fontSize: 30,
    textAlign: 'center',
    width: "70%",
    margin: 10,
    color: '#5741f2',
    backgroundColor: 'transparent',
  },
  
  section: {
    flex: 2,
    borderWidth:1,
     borderColor:'rgba(0,0,0,0.2)',
     alignItems:'center',
     justifyContent:'center',
     width:330,
     height:150,
     backgroundColor:'white',
     borderRadius:40,
  },
  sectionlong: {
    flex: 6,
    borderWidth:1,
     borderColor:'rgba(0,0,0,0.2)',
     alignItems:'center',
     justifyContent:'center',
     width:330,
     height:150,
     backgroundColor:'white',
     borderRadius:40,
  },
  image: {
    flex: 1,
    width: 380,
    height: 120,
    resizeMode: 'contain'
  },
  })
  export default styles;