import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

export const app = firebase.initializeApp({
    "projectId": "ajdseguros-852da",
    "appId": "1:430545718852:web:1c4371b5ebe48647cbf611",
    "storageBucket": "ajdseguros-852da.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyDfmdODSNeqdsniPanPRW2cjBkOb7WXIx4",
    "authDomain": "ajdseguros-852da.firebaseapp.com",
    "messagingSenderId": "430545718852"
});