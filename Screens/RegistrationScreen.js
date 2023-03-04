import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  // Image,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const initialState = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  function keyboardHide() {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          source={require("../assets/images/bg.jpg")}
          style={styles.img}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.wrapper,
                paddingBottom: setIsShowKeyboard ? 20 : 45,
              }}
            >
              <View style={styles.form}>
                <Text style={styles.formTitle}>Регістрація</Text>

                <TextInput
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, login: value }))
                  }
                  style={styles.input}
                  value={state.login}
                  textAlign="center"
                  placeholder="Логін"
                />
                <TextInput
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                  }
                  style={styles.input}
                  value={state.email}
                  textAlign="center"
                  placeholder="Електронна адреса"
                  keyboardType="email-address"
                />
                <TextInput
                  onFocus={() => {
                    setIsShowKeyboard(true);
                  }}
                  onChangeText={(value) =>
                    setState((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
                  }
                  value={state.password}
                  secureTextEntry={true}
                  style={styles.input}
                  textAlign="center"
                  placeholder="Пароль"
                />
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={keyboardHide}
                  style={styles.btn}
                >
                  <Text style={styles.textBtn}>Зареєструватись</Text>
                </TouchableOpacity>
                <Text
                  style={styles.textLink}
                  onPress={() => navigation.navigate("Login")}
                >
                  Ви вже маєте аккаунт? Увійти
                </Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;

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
  wrapper: {
    paddingTop: 92,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  form: {
    marginHorizontal: 16,
  },
  formTitle: {
    marginBottom: 32,
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 30,
    // font-weight: 500;
    lineHeight: 35,
    letterSpacing: 0.01,
    textAlign: "center",

    fontFamily: "Roboto-Medium",
  },
  inputTitle: {
    color: "#212121",
    fontSize: 19,
    fontStyle: "italic",
  },
  input: {
    height: 50,
    marginHorizontal: 50,
    marginTop: 16,
    padding: 16,
    fontSize: 16,
    lineHeight: 19,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",

    fontFamily: "Roboto-Regular",
  },
  btn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 51,
    marginTop: 43,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  textBtn: {
    color: "#FFFFFF",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  textLink: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
  // imageWrapper: {
  //   position: "absolute",
  //   left: "35%",
  //   top: "-15%",
  //   width: 120,
  //   height: 120,
  //   backgroundColor: "#F6F6F6",
  //   borderRadius: 16,
  // },
  // addIcon: {
  //   position: "absolute",
  //   left: "90%",
  //   top: "65%",
  //   width: 25,
  //   height: 25,
  // },
  // textPassword: {
  //   position: "absolute",
  //   top: "50%",
  //   left: "78%",
  //   color: "#1B4371",
  //   fontSize: 16,
  //   lineHeight: 19,
  // },
});
