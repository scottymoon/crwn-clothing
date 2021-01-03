import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { User } from "./useFirebase"

export interface AppState {
  user: User | null
}

export function useAppState(): AppState {
  const { user } = useContext(AuthContext)

  return { user }
}
