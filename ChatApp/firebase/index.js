import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDbnEeHgt0D-3kCb4eGOuHu9QF9r4HxUUE",
  authDomain: "whatsappclone-f338f.firebaseapp.com",
  projectId: "whatsappclone-f338f",
  storageBucket: "whatsappclone-f338f.appspot.com",
  messagingSenderId: "571812753091",
  appId: "1:571812753091:web:902417aa82c350e4837c76",
  measurementId: "G-Z3GDBHF6SE"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}
const auth = firebase.auth();

export {auth}