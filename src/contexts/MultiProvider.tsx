import { AuthProvider } from "./AuthContext"

interface Props {
  children: JSX.Element
}

export default function MultiProvider({ children }: Props) {
  return <AuthProvider>{children}</AuthProvider>
}
