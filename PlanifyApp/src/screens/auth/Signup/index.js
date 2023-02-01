/* eslint-disable prettier/prettier */

import React ,{useState} from "react";
import { View, Image, Text, SafeAreaView, Linking, Alert, ScrollView } from "react-native";
import styles from "./styles";
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import { PRIVACY_POLICY_LINK, TERMS_CONDITIONS_LINK } from "../../../constants/links";
import auth from '@react-native-firebase/auth';
const Signup = ({navigation}) => {
    const [agree, setAgree] = useState(false);
    const [values, setValues] = useState({});
    const onCheckboxPress = () => {
        setAgree(value => !value);
    };
    const onLinkPress = (url) => {
        Linking.openURL(url);
    };
    const onSubmit = () => {
        if (values.password !== values.confirm_password) {
            Alert.alert("Passwords do not match");
            return;
        }
        if (!agree) {
            Alert.alert("Please agree to my rules btch");
            return;
        }
        if (!values.first_name || !values.last_name) {
            Alert.alert("Please enter your name");
        }
        auth()
            .createUserWithEmailAndPassword(
                values.email, 
                values.password
            )
            .then(() => {
                Alert.alert('User signed up!');
                auth().currentUser.updateProfile({displayName: `${values.first_name} ${values.last_name}`});
            })
            .catch(error => {
                if (error.code === 'auth/operation-not-allowed') {
                    Alert.alert('Error!.');
                }
            });
    }
    const onChange = (value, key) => {
        setValues(vals => ({
            ...vals,
            [key]: value,
        }));
    }
    console.log(values);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Title>Join Akashi's hub!</Title>
                <Input 
                    placeholder="First Name" 
                    onChangeText={val => onChange(val, 'first_name')}/>
                <Input 
                    placeholder="Last Name" 
                    onChangeText={val => onChange(val, 'last_name')}/>
                <Input 
                    placeholder="Email" 
                    keyboardType="email-address"
                    onChangeText={val => onChange(val, 'email')}/>
                <Input 
                    placeholder="Password" 
                    secureTextEntry
                    onChangeText={val => onChange(val, 'password')}/>
                <Input 
                    placeholder="Confirm Password" 
                    secureTextEntry
                    onChangeText={val => onChange(val, 'confirm_password')}/>
                <View style={styles.row}>
                    <Checkbox checked={agree} onPress={onCheckboxPress} />
                    <Text style={styles.agreeText}>
                        I agree to join Akashi's hub!
                        <Text style={styles.link} onPress={() => onLinkPress(TERMS_CONDITIONS_LINK)}> Terms and Conditions </Text> 
                        and 
                        <Text style={styles.link} onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}> Privacy Policy </Text>
                    </Text>
                </View>
                <Button type={"blue"} onPress={() => onSubmit()}>Create new account</Button>
                <Text style={styles.footerText}>
                    Already registered?
                    <Text style={styles.footerLink} onPress={() => navigation.navigate('Signin')}>  Sign in!</Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Signup;