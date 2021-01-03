import { createContext, useEffect, useState } from "react"
import { useFirebase, User } from "../hooks/useFirebase"
import { ProviderProps } from "../types/context"

interface AuthContextValues {
  user: User | null
}

export const AuthContext = createContext<AuthContextValues>({
  user: null,
})

export const AuthProvider = ({ children }: ProviderProps) => {
  const { auth } = useFirebase()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => setUser(user))
    return unsubscribeFromAuth
  }, [auth])

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}
