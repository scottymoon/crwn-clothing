import CollectionPreview from "../../components/CollectionPreview"
import { collections } from "./data"

export default function ShopPage() {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest} />
      ))}
    </div>
  )
}
