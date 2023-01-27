import React, { useContext } from 'react'
import { View, Text, TouchableOpacity , StatusBar, Image} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { IMAGES } from '../../contains'
import { IconStyle , InputStyle } from '../../components'
import styles from './styles'
import { AuthContext } from '../../navigation/AuthProvider'
const InfoScreen = () => {
    const { logout } =  useContext(AuthContext)
    const onLogout = () => {
        logout()
    }
    return (
        <>
        <StatusBar hidden = {true} />
        <View style={styles.container}>
                <View style={styles.info}>
                    <View style={styles.infoBox}>
                        <Image style={styles.infoBoxImg} source={IMAGES.imgDefault} />
                        <TouchableOpacity style={styles.iconAvatar}>
                            <IconStyle name={'edit'} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.infoName}>Admin</Text>
                    <TouchableOpacity  style={styles.infoTitle}>
                        <Text style={styles.infoTitleText} >Cập nhật thông tin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onLogout} style={styles.infoIcon} >
                        <IconStyle name={'logout'} />
                    </TouchableOpacity>
                </View>
                <KeyboardAwareScrollView 
                    enableOnAndroid={true}
                    style={styles.body}
                >
                    <View style={styles.formInput}>
                       <InputStyle name={'Nickname'}/>
                    </View>
                    <View style={styles.formInput}>
                        <InputStyle name={'Email'}  editable={false}/>
                    </View>
                    <View style={styles.formInput}>
                        <InputStyle name={'Password'} editable={false}/>
                        <TouchableOpacity style={styles.changePass}>
                            <Text style={styles.changePassText}>Change Password</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
        </View>
        </>
    )
}

export default InfoScreen
