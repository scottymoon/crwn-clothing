import Button from "../Button"
import "./styles.scss"

export default function CartDropDown() {
  function goToCart() {
    console.log("go to cart clicked")
  }

  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <Button onClick={goToCart}>Go to Cart</Button>
    </div>
  )
}
