import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity , StatusBar, Image} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { IMAGES } from '../../contains'
import { IconStyle , InputStyle } from '../../components'
import styles from './styles'
import { AuthContext } from '../../navigation/AuthProvider'
import ChangePassForm from '../../components/changePass'
const InfoScreen = () => {
    const { logout, user, updateInfo } =  useContext(AuthContext)
    const [nickname, setNickname] = useState(displayName)
    const [visible, setVisible] = useState(false)
    const [photo, setPhoto] = useState(photoURL)
    const [loading, setLoading] = useState(0)
    const onLogout = () => {
        logout()
    }
    const onUpdateInfo = () => {
        updateInfo(nickname)
    }
    const onChangePass = () => {
        setVisible(true)
    }
    const onUpdateImg = () => {
    }
    const { displayName, email, photoURL } = user
    return (
        <>
        <StatusBar hidden = {true} />
        <View style={styles.container}>
            <ChangePassForm visible={visible} setVisible={(value) => setVisible(value)} />
                <View style={styles.info}>
                    <View style={styles.infoBox}>
                        <Image style={styles.infoBoxImg} source={IMAGES.imgDefault} />
                        <TouchableOpacity style={styles.iconAvatar}>
                            <IconStyle name={'edit'} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.infoName}>{displayName}</Text>
                    <TouchableOpacity onPress={onUpdateInfo} style={styles.infoTitle}>
                        <Text style={styles.infoTitleText} >Cập nhật thông tin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.infoIcon} >
                        <IconStyle name={'logout'} onPress={() => onLogout()} />
                    </TouchableOpacity>
                </View>
                <KeyboardAwareScrollView 
                    enableOnAndroid={true}
                    style={styles.body}
                >
                    <View style={styles.formInput}>
                       <InputStyle name={'Nickname'} value={nickname} onChange={(value) => setNickname(value)}/>
                    </View>
                    <View style={styles.formInput}>
                        <InputStyle name={'Email'}  editable={false} value={email}/>
                    </View>
                    <View style={styles.formInput}>
                        <InputStyle name={'Password'} editable={false}/>
                        <TouchableOpacity onPress={onChangePass} style={styles.changePass}>
                            <Text style={styles.changePassText}>Change Password</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
        </View>
        </>
    )
}

export default InfoScreen
