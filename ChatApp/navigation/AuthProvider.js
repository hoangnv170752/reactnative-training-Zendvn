import React, {createContext, useState} from "react";
import { View, Text } from 'react-native';
import { auth } from "../firebase";
import { useNavigation } from '@react-navigation/native';
import showNotice from "../lib/showNotice";
import { showMessage, hideMessage } from "react-native-flash-message";

export const  AuthContext = createContext({})
export const AuthProvider = ({ children }) => {
    const navigation = useNavigation();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login: async (email, password) => {
                    setLoading(true);
                    await auth.signInWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                        var user = userCredential.user;
                        setUser(user);
                        showMessage({
                            message: "Show message",
                            type: "info",
                        });
                    }).catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        showNotice(error.message, true);
                    })
                    setLoading(false);
                },
                register: async (email, password) => {
                    setLoading(true);
                    await auth.createUserWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                        userCredential.user.updateProfile({
                            displayName: email,
                            photoURL: "https://firebasestorage.googleapis.com/v0/b/whatsappclone-f338f.appspot.com/o/default%2Favatar_default.jpg?alt=media&token=506bac1f-1496-4b52-afbe-8ae6b380f997"

                        }).then(() => {
                            showNotice('Register successfully', true);
                            navigation.navigate('Login');
                        }).catch((error) => {
                            showNotice(error.message, true);
                        })
                    })
                    .catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log(errorMessage);
                        showNotice(errorMessage, true);
                    });
                    setLoading(false);
                },
                logout: async () => {
                    setLoading(true);
                    await auth.signOut().then(() => {
                        setUser(null);
                        console.log(user);
                    }).catch((error) => {
                        showNotice(error.message, true);
                        console.log(error.message);
                    })
                    setLoading(false);
                },
                updateInfo: async (displayName) => {
                    setLoading(false);
                    await auth.currentUser.updateProfile({
                        displayName : displayName
                    }).then(() => {
                        showNotice('Update success');
                    }).catch((error) => {
                        showNotice('Update unsuccessfull');

                    })
                    setLoading(true);
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}