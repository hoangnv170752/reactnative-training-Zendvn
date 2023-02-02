/* eslint-disable prettier/prettier */

import React from "react";
import { View, Image, Text, SafeAreaView, ScrollView } from "react-native";
import styles from "./styles";
import Header from "../../../components/Header";
import PlusIcon from "../../../components/PlusIcon";
import Title from "../../../components/Title";
// import { useNavigation } from "@react-navigation/native";
const Home = ({navigation}) => {
    // const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Home" />
            <ScrollView>
                <Title type="thin">Daily Tasks:</Title>
            </ScrollView>
            <PlusIcon />
        </SafeAreaView>
    );
};

export default Home;