import { ReactComponent as ShoppingIcon } from "../../assets/svg/shopping-bag.svg"
import "./styles.scss"

interface Props {
  onClick?: () => void
}

export default function CartIcon({ onClick }: Props) {
  return (
    <div className="cart-icon" onClick={onClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}
