import * as React from "react";
import {
  View,
  Button,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AuthContext } from "../../Services/context";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-paper";
import styles from "../../Services/styles";

function SignUpScreen({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const { signUp } = React.useContext(AuthContext);

  return (
    <ScrollView style={{ flex: 1 }}>
      <LinearGradient colors={["#3043ff", "#df3ac4"]} style={styles.gradient}>
        <Image source={require("../../assets/logo.png")} style={styles.image} />
        <View style={styles.section}>
          <View style={styles.space}></View>
          <Text style={styles.themeText}>Sign Up</Text>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            style={styles.text}
            left={<TextInput.Icon icon="eye" />}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.text}
            left={<TextInput.Icon icon="email" />}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.text}
            left={<TextInput.Icon icon="lock" />}
          />
          <TouchableOpacity
            style={styles.containButtonStyle}
            onPress={() =>
              signUp({ username, password, email }) & navigation.goBack()
            }
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#3043ff", "#df3ac4"]}
              style={styles.buttonStyle}
            >
              <Text style={styles.buttonText}>Sign up</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.space}></View>
        </View>
        <View style={styles.space}></View>
      </LinearGradient>
    </ScrollView>
  );
}
export default SignUpScreen;
