import React from "react";
import { View, Image, Text, SafeAreaView } from "react-native";
import styles from "./styles";
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
const Signin = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Title>Welcome back!</Title>
            <Input placeholder="Email"  keyboardType="email-address"/>
            <Input placeholder="Password" secureTextEntry/>

            <Button>Login</Button>
            <Text style={styles.footerText}>
                Not registered yet?
                <Text style={styles.footerLink} onPress={() => navigation.navigate('Signup')}>  Sign up!</Text>
            </Text>
        </SafeAreaView>
    )
}

export default Signin;