import { Link } from "react-router-dom"
import "./styles.scss"
import { ReactComponent as Logo } from "../../assets/svg/crown.svg"
import { useAppState } from "../../hooks/useAppState"
import { useFirebase } from "../../hooks/useFirebase"

export default function Header() {
  const { auth } = useFirebase()
  const { signedIn } = useAppState()

  function signOut() {
    auth.signOut()
  }

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/shop">
          Contact
        </Link>
        {signedIn ? (
          <div className="option" onClick={signOut}>
            Sign out
          </div>
        ) : (
          <Link className="option" to="/login">
            Sign in
          </Link>
        )}
      </div>
    </div>
  )
}
