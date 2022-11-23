import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";
import * as React from "react";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavBar from "./navBar";
import HomeScreen from "./Home/components/home";
import ReservationsScreen from "./Home/components/reservations";
import SignInScreen from "./Login/components/signin";
import SignUpScreen from "./SignUp/components/signup";
import FormReg from "./Login/components/registry";
import Profile from "./Home/components/profile";
import EditProfile from "./Home/components/editProfile";
import Cars from "./Home/components/cars";
import BookingHistory from "./Home/components/booking_history";
import AddCar from "./Home/components/addCar";
import Payments from "./Home/components/payments";
import AddCreditCard from "./Home/components/addCreditCard";
import EditCar from "./Home/components/editCar";
import { AuthContext } from "./Services/context";
import { PaymentContext } from "./Services/paymentContext";
import host_instance from "./host_instance.json";
import { IsRegisteredFunc } from "./Services/requests";
import * as Font  from "expo-font";
import AppLoading from "expo-app-loading";
const Stack = createNativeStackNavigator();


export default function App({ navigation }) {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);
  const [isRegistered, setIsRegistered] = React.useState(false);
  const [paymentSelected, setPaymentSelected] = React.useState("");
  const [idParking, setIdParking] = React.useState("");
  const [idReservation, setIdReservation] = React.useState("");
  const getFonts = () =>
  Font.loadAsync({
    "TTNorms-Light": require("./assets/fonts/TTNorms-Light.otf"),
    "TTNorms-Regular": require("./assets/fonts/TTNorms-Regular.otf"),
    "TTNorms-BoldItalic": require("./assets/fonts/TTNorms-BoldItalic.otf"),
    "LicensePlate": require("./assets/fonts/LicensePlate.ttf"),
  });
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync("tk");
        const registro_boolean = await IsRegisteredFunc(userToken);
        console.log(registro_boolean);
        console.log(userToken);
        if (userToken != null) {
          console.log("Token status: available");
          setIsRegistered(registro_boolean);
        } else {
          console.log("Token status: empty");
        }
      } catch (e) {
        // Restoring token failed
      }

      dispatch({ type: "RESTORE_TOKEN", token: userToken });
      //Habilitar ambas para resetear localstorge
      //dispatch({ type: 'SIGN_OUT' })
      //await SecureStore.deleteItemAsync('tk')
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(() => ({
    signUp: async (data) => {
      //Armo los datos que serán enviados en la request
      const fetchData = {};
      fetchData.method = "POST";
      fetchData.body = JSON.stringify(data);
      fetchData.headers = {
        accept: "application/json",
        "Content-Type": "application/json",
      };
      //Hago el request a signup
      console.log(fetchData);
      fetch(host_instance.path + "/auth/signup", fetchData).then(
        async function (response) {
          if (response.status != 200) {
            alert("Internal error");
          } else {
            const dataRes = await response.json();
            console.log("SignaUp OK");
            //console.log('Response header:',response)
            alert("Succes credentials. Please loged-on.");
          }
        }
      );
    },
    signIn: async (data) => {
      try {
        //Armo los datos que serán enviados en la request
        const fetchData = {};
        fetchData.method = "POST";
        fetchData.body = JSON.stringify(data);
        fetchData.headers = {
          accept: "application/json",
          "Content-Type": "application/json",
        };
        //Hago el request a login
        fetch(host_instance.path + "/auth/users/login", fetchData).then(
          async function (response) {
            const dataRes = await response.json();
            if (response.status == 422) {
              console.log("Status response:", response.status);
              alert("Invalid credentials");
            } else if (response.status == 401) {
              console.log("Status response:", response.status);
              alert("Invalid credentials");
            } else if (response.status == 200) {
              const isReg = await IsRegisteredFunc(dataRes.token);
              dispatch({ type: "SIGN_IN", token: dataRes.token });
              await SecureStore.setItemAsync("tk", dataRes.token);
              if (!isReg) {
                console.log("Completar registro");
                setIsRegistered(false);
              } else {
                console.log("Go to home");
                setIsRegistered(true);
                //guardar datos para perfil ??
              }
            } else {
              //const dataRes = await response.json();
              console.log(dataRes);
              alert("Internal error");
            }
          }
        );
      } catch (error) {
        console.error("error error:", error);
      }
    },
    signOut: async () => {
      dispatch({ type: "SIGN_OUT" });
      await SecureStore.deleteItemAsync("tk");
    },
    register: async (data) => {
      const userToken = await SecureStore.getItemAsync("tk");

      //data.birthDateDt="2022-09-14T18:03:44.163Z"
      data.documentNumber = parseInt(data.documentNumber);
      data.contactNumber = parseInt(data.contactNumber);
      const fetchData = {};
      fetchData.method = "POST";
      fetchData.body = JSON.stringify(data);
      fetchData.headers = {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + userToken,
      };

      //fetchData.headers.Authorization='Bearer '+userToken
      console.log("Data to register:", fetchData);
      //Hago el request a signup
      fetch(
        host_instance.path + "/user/car-drivers/create-user",
        fetchData
      ).then(async function (response) {
        if (response.status != 200) {
          console.log("not 200");
        } else {
          const dataRes = await response.json();
          console.log("Registry is success");
          setIsRegistered(true);
          alert("Welcome to AppArCar");
        }
      });
    },
  }));
  const paymentContext = React.useMemo(() => ({
    getSelectedPayment: () => paymentSelected,
    setSelectedPayment: (cardNumber) => setPaymentSelected(cardNumber),
    getIdParking:() => idParking,
    setIdParking: (idParking) => setIdParking(idParking),
    getIdReservation:() => idReservation,
    setIdReservation:(idReservation) => setIdReservation(idReservation),
    clearPaymentContext: () => {setPaymentSelected("") & setIdParking("") & setIdReservation("")}
  }));
  if (fontsLoaded) {
    return (
      <AuthContext.Provider value={authContext}>
        <PaymentContext.Provider value={paymentContext}>
          <NavigationContainer>
            <Stack.Navigator>
              {state.userToken == null ? (
                <>
                  <Stack.Screen
                    name="SignIn"
                    component={SignInScreen}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="SignUp"
                    component={SignUpScreen}
                    options={{ headerShown: false }}
                  />
                </>
              ) : (
                <>
                  {isRegistered ? (
                    <>
                      <Stack.Screen
                        name="NavBar"
                        component={NavBar}
                        options={{ headerShown: false }}
                      />
                      <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ headerShown: false }}
                      />
                      <Stack.Screen
                        name="Reservation"
                        component={ReservationsScreen}
                        options={{ headerShown: true }}
                      />
                      <Stack.Screen
                        name="EditProfile"
                        component={Profile}
                        options={{ headerShown: false }}
                      />
                      <Stack.Screen
                        name="EditProfile2"
                        component={EditProfile}
                        options={{ headerShown: false }}
                      />
                      <Stack.Screen
                        name="Cars"
                        component={Cars}
                      />
                      <Stack.Screen
                        name="AddCar"
                        component={AddCar}
                      />
                      <Stack.Screen
                        name="EditCar"
                        component={EditCar}
                      />
                      <Stack.Screen
                        name="Payments"
                        component={Payments}
                      />
                      <Stack.Screen
                        name="Add Credit Card"
                        component={AddCreditCard}
                      />
                      <Stack.Screen
                        name="Booking History"
                        component={BookingHistory}
                      />
                      
                    </>
                  ) : (
                    <>
                      <Stack.Screen name="Registrar" component={FormReg} options={{ headerShown: false }}/>
                    </>
                  )}
                </>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </PaymentContext.Provider>
      </AuthContext.Provider>
    );
  } else {
    return (
      <AppLoading onError={(error)=> console.warn(error)} startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
