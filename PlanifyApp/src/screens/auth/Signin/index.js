/* eslint-disable prettier/prettier */

import React, {useState} from "react";
import { View, Image, Text, SafeAreaView, Alert } from "react-native";
import styles from "./styles";
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import auth from '@react-native-firebase/auth';
const Signin = ({navigation}) => {
    const [values, setValues] = useState({});
    const onChange = (value, key) => {
        setValues(vals => ({
            ...vals,
            [key]: value,
        }));
    };
    const onSubmit = () => {
        auth()
            .signInWithEmailAndPassword(
                values.email, values.password
            )
            .then(() => {
                Alert.alert('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    Alert.alert('That email address is invalid!');
                }

                console.error(error);
            });
    };
    return (
        <SafeAreaView style={styles.container}>
            <Title>Welcome back!</Title>
            <Input placeholder="Email"  keyboardType="email-address" onChangeText={(val) => onChange(val, 'email')}/>
            <Input placeholder="Password" secureTextEntry onChangeText={(val) => onChange(val, 'password')}/>

            <Button onPress={onSubmit}>Login</Button>
            <Text style={styles.footerText}>
                Not registered yet?
                <Text style={styles.footerLink} onPress={() => navigation.navigate('Signup')}>  Sign up!</Text>
            </Text>
        </SafeAreaView>
    );
};

export default Signin;