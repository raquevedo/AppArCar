import React from "react";
import { StyleSheet, TextInput } from "react-native";

const TInput = () => {
  const [text, onChangeText] = React.useState("");

  return (
      <TextInput
        style={[styles.input]}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search garages on a place"
      >
      </TextInput>
  );
};

const styles = StyleSheet.create({  
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
});
export default TInput;