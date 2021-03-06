import { CartProvider } from "./CartContext"
import { UserProvider } from "./UserContext"

interface Props {
  children: JSX.Element
}

export default function MultiProvider({ children }: Props) {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  )
}
