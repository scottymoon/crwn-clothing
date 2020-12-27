import { Product } from "../../types/shop"
import CollectionItem from "../CollectionItem"
import "./styles.scss"

interface Props {
  title: string
  products: Product[]
}

export default function CollectionPreview({ title, products }: Props) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map(({ id, ...rest }) => (
            <CollectionItem id={id} {...rest} />
          ))}
      </div>
    </div>
  )
}
