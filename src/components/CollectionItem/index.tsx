import { Product } from "../../types/shop"
import "./styles.scss"

export default function CollectionItem({ id, imageUrl, name, price }: Product) {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  )
}
