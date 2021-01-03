import { useContext } from "react"
import { UserContext, UserContextValues } from "../contexts/UserContext"

interface AppState extends UserContextValues {}

export function useAppState(): AppState {
  const userContext = useContext(UserContext)

  return { ...userContext }
}
