import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppButton from './app/components/Button';
import AppText from "./app/components/Text"
import AppTextInput from './app/components/TextInput';
import Icon from './app/components/Icon';
import Screen from './app/components/Screen';
import LoginScreen from './app/screens/LoginScreen';
import WelcomeScreen from "./app/screens/WelcomeScreen"
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
 
export default function App() {
  return (
    // <Screen>
    //   <AppText>Open up App.js to start working on your app!</AppText>
    //   <AppButton title="Login" onPress={() => console.log("tapped!")} />
    // </Screen>
    
    // <WelcomeScreen />

    // <Screen>
    //   <Icon
    //     name="email"
    //     size={50}
    //     iconColor="white"
    //   />
    //   <AppTextInput
    //   icon="email"
    //   placeholder="Username" />
    // </Screen>

    // <LoginScreen />

    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
