/* eslint-disable prettier/prettier */

import React from "react";
import { View, Image, Text, SafeAreaView } from "react-native";
import styles from "./styles";
// import { useNavigation } from "@react-navigation/native";
const Home = ({navigation}) => {
    // const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text>Home screen</Text>
        </SafeAreaView>
    );
};

export default Home;