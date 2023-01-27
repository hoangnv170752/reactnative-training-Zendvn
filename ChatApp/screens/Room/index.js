import { useNavigation } from '@react-navigation/native'
import React  from 'react'
import { View , Text , StatusBar, FlatList, TouchableOpacity , Image } from 'react-native'
import styles from './styles'

let data = [
  {id : 1 ,name : 'Nodejs' , img : require('../../assets/images/avatar_default.png')},
  {id : 2 ,name : 'ReactJS' , img : require('../../assets/images/backgroundFooter.png')}
]

const RoomScreen = () => {
  const navigation = useNavigation()

  const goChatRoom = () => {
    navigation.navigate('ChatScreen')
  }

  const showItem = ({item}) => {
      return (
        <TouchableOpacity onPress={goChatRoom} style={styles.roomContainer}>
          <View style={styles.roomBox}>
            <View style={styles.boxImg}>
              <Image  style={styles.img} source={item.img} />
            </View>
            <Text>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )
  }
    
  return (
    <>
      <StatusBar hidden={true} />
      <FlatList 
        data={data}
        numColumns={2}
        renderItem={showItem}
        key={(item) => item.id.toString()}
      />
    </>
  )
}

export default RoomScreen
