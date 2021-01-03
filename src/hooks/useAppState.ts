import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { UserContext } from "../contexts/UserContext"
import { User } from "../types/user"
import { FirebaseUser } from "./useFirebase"

export interface AppState {
  firebaseUser: FirebaseUser | null
  signedIn: boolean
  user: User | null
}

export function useAppState(): AppState {
  const { firebaseUser } = useContext(AuthContext)
  const { user } = useContext(UserContext)
  const signedIn = firebaseUser != null

  return { firebaseUser, signedIn, user }
}
