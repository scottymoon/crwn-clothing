import { AuthProvider } from "./AuthContext"
import { UserProvider } from "./UserContext"

interface Props {
  children: JSX.Element
}

export default function MultiProvider({ children }: Props) {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  )
}
