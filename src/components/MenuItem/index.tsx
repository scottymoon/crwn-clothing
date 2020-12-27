import { useNavigation } from "../../hooks/useNavigation"
import "./styles.scss"

interface Props {
  title: string
  imageUrl: string
  linkUrl: string
  size?: string
}

export default function MenuItem({ imageUrl, linkUrl, size, title }: Props) {
  const { matchTo } = useNavigation()

  const backgroundImage = {
    backgroundImage: `url(${imageUrl})`,
  }

  function clicked(path: string) {
    matchTo(path)
  }

  return (
    <div className={`${size} menu-item`} onClick={() => clicked(linkUrl)}>
      <div style={backgroundImage} className="background-image" />
      <div className="content">
        <div className="title">{title}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}
