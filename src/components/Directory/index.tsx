import MenuItem from "../MenuItem"
import "./styles.scss"
import { sections } from "./data"

export default function Directory() {
  return (
    <div className="directory">
      {sections.map(({ id, imageUrl, size, title }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  )
}
