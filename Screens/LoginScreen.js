import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/bg.jpg")}
        style={styles.img}
      >
        <View style={styles.form}>
          <Text style={styles.formTitle}>Увійти</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

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

    // justifyContent: "flex-end",
  },
  form: {
    flex: 1,
    backgroundColor: "#fff",
  },
  formTitle: {
    marginBottom: 32,
    color: "#212121",
    // fontFamily: Roboto;
    fontSize: 30,
    // font-weight: 500;
    // line-height: 35px;
    letterSpacing: 0.01,
    textAlign: "center",
  },
  inputTitle: {
    color: "#000",
    fontSize: 19,
    fontStyle: "italic",
  },
  input: {
    height: 50,
    marginHorizontal: 50,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#EfEfEf",
  },
});
