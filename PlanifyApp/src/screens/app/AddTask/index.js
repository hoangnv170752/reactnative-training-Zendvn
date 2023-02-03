/* eslint-disable prettier/prettier */

import React, {useState} from "react";
import { View, Image, Text, SafeAreaView, Pressable, Alert } from "react-native";
import styles from "./styles";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import Categories from "../../../components/Categories";
import { categories } from "../../../constants/categories";
import colors from "../../../constants/colors";
import DateInput from "../../../components/DateInput";
// import { useNavigation } from "@react-navigation/native";
import Button from "../../../components/Button";
import moment from "moment";
// import firestore from '@react-native-firebase/firestore';

const AddTask = ({navigation}) => {
    // const navigation = useNavigation();
    const [title, setTitle ] = useState();
    const [category, setCategory ] = useState();
    const [deadline, setDeadline] = useState(new Date());
    const handleBack = () => {
        navigation.goBack();
    };
    const today = moment(new Date()).format('YYYY-MM-DD');
    const deadlineFormatted = moment(deadline).format('YYYY-MM-DD');

    const onSubmit = () => {
        if (!title) {
            Alert.alert("Please select a title");
            return;
        };
        if (moment(deadlineFormatted).isBefore(today)) {
            Alert.alert("Please select a valid deadline date");
            return;
        }
        console.log(deadline);
        // firestore()
        // .collection('Tasks')
        // .doc('ABC')
        // .set({

        // })
        // .then(() => {

        // });
    };    
    return (
        <SafeAreaView style={styles.container}>
            <Pressable onPress={handleBack} style={styles.backContainer}>
                {/* <Image style={styles.backIcon} source = {require=('../../../assets/back.png')} /> */}
                <Text style={{color: colors.black}}>Back</Text>
            </Pressable>
            <Title type="thin">Add New Task</Title>
            <Text style={styles.label}>Describe the Task</Text>
            <Input 
                outlined placeholder = "Type here..." 
                onChangeText={setTitle} 
                value={title}
            />
            <Text style={styles.label}>Type</Text>
            <Categories 
                categories={categories} 
                selectedCategory={category} 
                onCategoryPress={setCategory}
            />
            <Text style={styles.label}>Deadline</Text>
            <DateInput value={deadline} onChange={setDeadline} />
                <Button 
                    style={styles.button} 
                    type="blue" 
                    onPress={onSubmit}>
                    Add the Task
                </Button>
        </SafeAreaView>
    );
};

export default AddTask;