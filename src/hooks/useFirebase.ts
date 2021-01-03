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

export type User = firebase.User

firebase.initializeApp(config)

export function useFirebase() {
  const auth = firebase.auth()
  const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: "select_account" })
  const signInWithGoogle = () => auth.signInWithPopup(provider)

  return { auth, firebase, firestore, signInWithGoogle }
}
