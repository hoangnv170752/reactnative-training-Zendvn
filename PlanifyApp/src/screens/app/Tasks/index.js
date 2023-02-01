/* eslint-disable prettier/prettier */

import React from "react";
import { View, Image, Text, SafeAreaView } from "react-native";
import styles from "./styles";
// import { useNavigation } from "@react-navigation/native";
const Tasks = ({navigation}) => {
    // const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text>Home</Text>
        </SafeAreaView>
    );
};

export default Tasks;