import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import Button from "../../../components/Button";
const Onboarding = () => {
    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <Image source={require('../../../assets/onboarding.png')}  style = {styles.image}/>
                <View style={styles.footer}/>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Best task management app
                </Text>
                <Text style={styles.subtitle}>
                    Get organized by sorting out all your tasks and boost your productivity.
                </Text>
                <Button>Log In</Button>
                <Button>Get Started</Button>
            </View>
        </View>
    )
}

export default Onboarding;