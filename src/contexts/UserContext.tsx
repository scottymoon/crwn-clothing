/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react"
import { useAppState } from "../hooks/useAppState"
import {
  DocumentReference,
  FirebaseUser,
  useFirebase,
} from "../hooks/useFirebase"
import { ProviderProps } from "../types/context"
import { User } from "../types/user"

interface UserContextValues {
  user: User | null
  userRef: DocumentReference | null
}

export const UserContext = createContext<UserContextValues>({
  user: null,
  userRef: null,
})

export const UserProvider = ({ children }: ProviderProps) => {
  const { firestore } = useFirebase()
  const { firebaseUser } = useAppState()
  const [user, setUser] = useState<User | null>(null)
  const [userRef, setUserRef] = useState<DocumentReference | null>(null)

  useEffect(() => {
    createUser(firebaseUser)
  }, [firebaseUser])

  useEffect(() => {
    const unsubscribeFromUser = subscribeToUser(userRef)
    return unsubscribeFromUser
  }, [firebaseUser, userRef])

  function createUser(firebaseUser: FirebaseUser | null) {
    if (!firebaseUser) return

    const ref = firestore.collection("users").doc(firebaseUser.uid)
    ref.get().then((snap) => {
      if (!snap.exists) {
        const { displayName, email } = firebaseUser
        const createdAt = new Date()

        ref
          .set({
            displayName,
            email,
            createdAt,
          })
          .catch((err) => console.log("Error creating user", err.message))
      }
    })

    setUserRef(ref)
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

  return (
    <UserContext.Provider value={{ user, userRef }}>
      {children}
    </UserContext.Provider>
  )
}
