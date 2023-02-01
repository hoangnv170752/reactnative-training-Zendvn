/* eslint-disable prettier/prettier */

import React from "react";
import { View, Image, Text, SafeAreaView } from "react-native";
import styles from "./styles";
import Header from "../../../components/Header";

// import { useNavigation } from "@react-navigation/native";
const Tasks = ({navigation}) => {
    // const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Tasks" />
            <Text>Home</Text>
        </SafeAreaView>
    );
};

export default Tasks;