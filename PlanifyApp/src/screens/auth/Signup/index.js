import React ,{useState} from "react";
import { View, Image, Text, SafeAreaView, Linking } from "react-native";
import styles from "./styles";
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import { PRIVACY_POLICY_LINK, TERMS_CONDITIONS_LINK } from "../../../constants/links";
const Signup = ({navigation}) => {
    const [agree, setAgree] = useState(false);
    const onCheckboxPress = () => {
        setAgree(value => !value);
    };
    const onLinkPress = (url) => {
        Linking.openURL(url)
    }
    return (
        <SafeAreaView style={styles.container}>
            <Title>Join Akashi's hub!</Title>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Email" keyboardType="email-address"/>
            <Input placeholder="Password" secureTextEntry/>
            <Input placeholder="Confirm Password" secureTextEntry/>

            <View style={styles.row}>
                <Checkbox checked={agree} onPress={onCheckboxPress} />
                <Text style={styles.agreeText}>
                    I agree to join Akashi's hub!
                    <Text style={styles.link} onPress={() => onLinkPress(TERMS_CONDITIONS_LINK)}> Terms and Conditions </Text> 
                    and 
                    <Text style={styles.link} onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}> Privacy Policy </Text>
                </Text>
            </View>
            <Button type={"blue"}>Create new account</Button>
            <Text style={styles.footerText}>
                Already registered?
                <Text style={styles.footerLink} onPress={() => navigation.navigate('Signin')}>  Sign in!</Text>
            </Text>
        </SafeAreaView>
    )
}

export default Signup;