import "./styles.scss"

interface Props {
  title: string
  imageUrl: string
  size?: string
}
export default function MenuItem({ imageUrl, size, title }: Props) {
  const backgroundImage = {
    backgroundImage: `url(${imageUrl})`,
  }

  return (
    <div className={`${size} menu-item`}>
      <div style={backgroundImage} className="background-image" />
      <div className="content">
        <div className="title">{title}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}
