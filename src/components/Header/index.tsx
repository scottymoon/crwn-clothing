import { Link } from "react-router-dom"
import "./styles.scss"
import { ReactComponent as Logo } from "../../assets/svg/crown.svg"

export default function Header() {
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
        <Link className="option" to="/login">
          Login
        </Link>
      </div>
    </div>
  )
}
