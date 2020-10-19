import React from 'react';
import { Image, StyleSheet } from 'react-native'
import * as Yup from "yup";

import Screen from '../components/Screen';
import { SubmitButton,AppForm,AppFormField } from "../components/forms";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(2).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });

function RegisterScreen(props) {

    return (
        <Screen style={styles.container}>
            <Image
                source={require("../assets/logo-red.png")}
                style={styles.logo}
            />
            <AppForm
                initialValues={{name: '', email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    keyboardType="default"
                    name="name"
                    placeholder="Enter Your Name"
                    textContentType="username"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Enter Your Email"
                    textContentType="emailAddress"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Enter Your Password"
                    secureTextEntry={true}
                    textContentType="password"
                />
                <SubmitButton title="Register" />
            </AppForm>
            
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    logo: {
      width: 80,
      height: 80,
      alignSelf: "center",
      marginTop: 50,
      marginBottom: 20,
    },
  });

export default RegisterScreen;
