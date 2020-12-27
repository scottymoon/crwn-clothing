import MenuItem from "../MenuItem"
import "./styles.scss"
import { sections } from "./data"

export default function Directory() {
  return (
    <div className="directory">
      {sections.map(({ id, ...rest }) => (
        <MenuItem key={id} {...rest} />
      ))}
    </div>
  )
}
