import { useContext } from "react"
import { CartContext, CartContextValues } from "../contexts/CartContext"
import { UserContext, UserContextValues } from "../contexts/UserContext"

interface AppState {
  user: UserContextValues
  cart: CartContextValues
}

export function useAppState(): AppState {
  const user = useContext(UserContext)
  const cart = useContext(CartContext)

  return { user, cart }
}
