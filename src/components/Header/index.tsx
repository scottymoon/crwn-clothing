import { Link } from "react-router-dom"
import "./styles.scss"
import { ReactComponent as Logo } from "../../assets/svg/crown.svg"
import { useAppState } from "../../hooks/useAppState"
import CartIcon from "../CartIcon"
import CartDropDown from "../CartDropDown"

export default function Header() {
  const {
    user: { signedIn, signOut },
    cart: { previewCart, toggleCart },
  } = useAppState()

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
          <Link className="option" to="/auth">
            Sign in
          </Link>
        )}
        <CartIcon onClick={toggleCart} />
      </div>
      {previewCart && <CartDropDown />}
    </div>
  )
}
