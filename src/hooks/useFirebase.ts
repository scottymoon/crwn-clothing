import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyBfdfS7zNHwQJqmARfnWqOCMkA-ahe9Apw",
  authDomain: "crwn-db-66e49.firebaseapp.com",
  projectId: "crwn-db-66e49",
  storageBucket: "crwn-db-66e49.appspot.com",
  messagingSenderId: "350942838856",
  appId: "1:350942838856:web:1a0123a78ee527b6ac987d",
  measurementId: "G-NLMWTZQ6J6",
}

export type CollectionReference = firebase.firestore.CollectionReference
export type DocumentReference = firebase.firestore.DocumentReference
export type FirebaseUser = firebase.User

try {
  firebase.initializeApp(config)
} catch (err) {
  console.log("Error Initializing Firebase App: ", err.message)
}

export function useFirebase() {
  const auth = firebase.auth()
  const firestore = firebase.firestore()

  return {
    auth,
    firebase,
    firestore,
  }
}
