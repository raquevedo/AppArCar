import * as React from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { AuthContext } from "../../Services/context";
import styles from "../../Services/styles";
import { TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

function SignInScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { signIn } = React.useContext(AuthContext);

  return (
    <ScrollView style={{ flex: 1 }}>
      <LinearGradient colors={["#3043ff", "#df3ac4"]} style={styles.gradient}>
        <Image source={require("../../assets/logo.png")} style={styles.image} />

        <View style={styles.section}>
          <View style={styles.space}></View>
          <Text style={styles.themeText}>Hello!</Text>
          <TextInput
            placeholder="Email"
            value={email}
            style={styles.text}
            onChangeText={setEmail}
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
            style={styles.containButtonStylel}
            onPress={() => signIn({ email, password })}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#3043ff", "#df3ac4"]}
              style={styles.buttonStylel}
            >
              <Text style={styles.buttonTextl}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.space}></View>
        </View>
        <View style={styles.space}>
          <TouchableOpacity
            style={styles.containButtonStyle}
            onPress={() => navigation.navigate("SignUp")}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#df3ac4", "#3043ff"]}
              style={styles.buttonStyle}
            >
              <Text style={styles.buttonText}>Sign up</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}
export default SignInScreen;
