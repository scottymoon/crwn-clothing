import { ReactComponent as ShoppingIcon } from "../../assets/svg/shopping-bag.svg"
import { useAppState } from "../../hooks/useAppState"
import "./styles.scss"

interface Props {
  onClick?: () => void
}

export default function CartIcon({ onClick }: Props) {
  const {
    cart: { cartItems },
  } = useAppState()
  return (
    <div className="cart-icon" onClick={onClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItems.length}</span>
    </div>
  )
}
