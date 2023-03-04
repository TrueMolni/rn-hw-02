import React from "react";
import { StyleSheet, View } from "react-native";
import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationScreen></RegistrationScreen>
      {/* <LoginScreen></LoginScreen> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  img: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
    // alignItems: "center",
  },
});
