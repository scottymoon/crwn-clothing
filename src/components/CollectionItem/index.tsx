import { useAppState } from "../../hooks/useAppState"
import { Product } from "../../types/shop"
import Button from "../Button"
import "./styles.scss"

interface Props {
  id: number
  item: Product
}
export default function CollectionItem({ id, item }: Props) {
  const {
    cart: { addToCart },
  } = useAppState()
  const { imageUrl, name, price } = item

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={() => addToCart(item)}>Add to Cart</Button>
    </div>
  )
}
