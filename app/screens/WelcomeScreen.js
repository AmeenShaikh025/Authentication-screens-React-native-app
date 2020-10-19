import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";

import AppButton from "../components/Button";
import routes from "../navigation/routes";

const image = require("../assets/background.jpg");

export default WelcomeScreen = ({navigation}) => (
  <SafeAreaView style={styles.container}>
    <ImageBackground blurRadius={10} source={image} style={styles.background}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-red.png")}
          fadeDuration={500}
        />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate(routes.LOGIN)} />
        <AppButton title="Register" onPress={() => navigation.navigate(routes.REGISTER)} color="secondary" />
      </View>
    </ImageBackground>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
