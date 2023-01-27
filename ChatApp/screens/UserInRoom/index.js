import React from 'react';
import { View, Text , StatusBar , Image, FlatList } from 'react-native';
import styles from './styles'
import { MaterialIcons } from '@expo/vector-icons'; 
import { IconStyle } from '../../components'

const data = [
  {id : 1 , name : 'User 1' , img : require('../../assets/images/backgroundFooter.png')},
  {id : 2 , name : 'User 2' , img : require('../../assets/images/backgroundFooter.png')}
]

const UserInRoomScreen = () => {

  const showUser = ({item}) => {
    return (
      <View style={styles.userForm}>
        <View style={styles.imgUserBox}>
          <Image style={styles.imgUser} source={item.img} />
        </View>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.icon}>
            <IconStyle name={"online-prediction"} />
            <Text style={styles.online}>online</Text>
          </View>
        </View>
      </View>
    )
  }
  
  return (
    <>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <FlatList 
          data={data}
          renderItem={showUser}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
     </>
  );
}

export default UserInRoomScreen
