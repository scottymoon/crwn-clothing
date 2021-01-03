/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react"
import {
  DocumentReference,
  FirebaseUser,
  useFirebase,
} from "../hooks/useFirebase"
import { ProviderProps } from "../types/context"
import { User } from "../types/user"

export interface UserContextValues {
  firebaseUser: FirebaseUser | null
  signedIn: boolean
  signIn: (email: string, password: string) => void
  signInWithGoogle: () => void
  signOut: () => void
  signUp: (email: string, password: string, displayName: string) => void
  user: User | null
}

export const UserContext = createContext<UserContextValues>({
  firebaseUser: null,
  signedIn: false,
  signIn: () => null,
  signInWithGoogle: () => null,
  signOut: () => null,
  signUp: () => null,
  user: null,
})

export const UserProvider = ({ children }: ProviderProps) => {
  const { auth, firebase, firestore } = useFirebase()
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null)
  const [user, setUser] = useState<User | null>(null)

  const userRef = firestore.collection("users").doc(firebaseUser?.uid)
  const signedIn = firebaseUser !== null

  // if firebaseUser and userRef exist, subscribe to user data changes
  useEffect(() => {
    const unsubscribeFromUser = subscribeToUser(userRef)
    return unsubscribeFromUser
  }, [firebaseUser])

  function createFirebaseUser(
    firebaseUser: FirebaseUser | null,
    extraValues?: object,
  ) {
    if (!firebaseUser) return

    userRef.get().then((snap) => {
      if (!snap.exists) {
        const { displayName, email } = firebaseUser
        const createdAt = new Date()

        userRef
          .set({
            displayName,
            email,
            createdAt,
            ...extraValues,
          })
          .catch((err) => console.log("Error creating user", err.message))
      }
    })
  }

  function subscribeToUser(ref: DocumentReference | null) {
    if (!ref) return

    if (!firebaseUser) {
      setUser(null)
      return
    }

    return ref.onSnapshot((snap) => {
      const data = snap.data()
      setUser({
        id: snap.id,
        displayName: data?.displayName,
        email: data?.email,
        createdAt: data?.createdAt.toDate(),
      })
    })
  }

  function signInWithGoogle() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
    googleAuthProvider.setCustomParameters({ prompt: "select_account" })

    auth
      .signInWithPopup(googleAuthProvider)
      .then((result) => {
        const { user, additionalUserInfo } = result
        if (additionalUserInfo?.isNewUser) {
          createFirebaseUser(user)
        }
        setFirebaseUser(user)
      })
      .catch((err) => {
        console.log("Google Auth error: ", err.message)
      })
  }

  function signIn(email: string, password: string) {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        setFirebaseUser(result.user)
      })
      .catch((err) => {
        console.log("Sign in error: ", err.message)
      })
  }

  function signOut() {
    auth.signOut().then(() => setFirebaseUser(null))
  }

  function signUp(email: string, password: string, displayName: string) {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        createFirebaseUser(userCredential.user, { displayName })
        setFirebaseUser(userCredential.user)
      })
      .catch((err) => {
        console.log("Error creating user: ", err.message)
      })
    console.log(email, password, displayName)
  }

  return (
    <UserContext.Provider
      value={{
        firebaseUser,
        signedIn,
        signIn,
        signInWithGoogle,
        signOut,
        signUp,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
