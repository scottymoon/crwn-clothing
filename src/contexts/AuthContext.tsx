import { createContext, useEffect, useState } from "react"
import { useFirebase, FirebaseUser } from "../hooks/useFirebase"
import { ProviderProps } from "../types/context"

interface AuthContextValues {
  firebaseUser: FirebaseUser | null
}

export const AuthContext = createContext<AuthContextValues>({
  firebaseUser: null,
})

export const AuthProvider = ({ children }: ProviderProps) => {
  const { auth } = useFirebase()
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null)

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setFirebaseUser(user)
    })
    return unsubscribeFromAuth
  }, [auth])

  return (
    <AuthContext.Provider value={{ firebaseUser }}>
      {children}
    </AuthContext.Provider>
  )
}
