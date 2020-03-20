require("firebase/firestore")
import firebase from "firebase"
import firebaseConfig from './fireconfig'

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

var db = firebase.firestore();

export const auth = firebase.auth()
export const firestore = firebase.firestore
export default db;