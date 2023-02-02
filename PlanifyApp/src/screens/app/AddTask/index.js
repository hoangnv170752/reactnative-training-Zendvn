/* eslint-disable prettier/prettier */

import React, {useState} from "react";
import { View, Image, Text, SafeAreaView, Pressable } from "react-native";
import styles from "./styles";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import Categories from "../../../components/Categories";
import { categories } from "../../../constants/categories";
import colors from "../../../constants/colors";
import DateInput from "../../../components/DateInput";
// import { useNavigation } from "@react-navigation/native";
const AddTask = ({navigation}) => {
    // const navigation = useNavigation();
    const [category, setCategory ] = useState();
    const [deadline, setDeadline] = useState(new Date());
    const handleBack = () => {
        navigation.goBack();
    };
    return (
        <SafeAreaView style={styles.container}>
            <Pressable onPress={handleBack} style={styles.backContainer}>
                {/* <Image style={styles.backIcon} source = {require=('../../../assets/back.png')} /> */}
                <Text style={{color: colors.black}}>Back</Text>
            </Pressable>
            <Title type="thin">Add New Task</Title>
            <Text style={styles.label}>Describe the Task</Text>
            <Input outlined placeholder = "Type here..."/>
            <Text style={styles.label}>Type</Text>
            <Categories categories={categories} selectedCategory={category} onCategoryPress={setCategory}/>
            <Text style={styles.label}>Deadline</Text>
            <DateInput value={deadline} onChange={setDeadline} />
        </SafeAreaView>
    );
};

export default AddTask;