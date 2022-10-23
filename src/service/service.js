import firebase from 'firebase/compat/app';
import "firebase/compat/database";
import "firebase/compat/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBheGjikaqyZSj0q-bfl7ugyjko5b04jkw",
    authDomain: "testdb-8c4bb.firebaseapp.com",
    projectId: "testdb-8c4bb",
    storageBucket: "testdb-8c4bb.appspot.com",
    messagingSenderId: "751018698642",
    appId: "1:751018698642:web:de453276b12adb93a5034b"
  };

const firebaseDb = firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
