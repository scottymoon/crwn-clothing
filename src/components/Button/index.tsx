import "./styles.scss"
import { Button as MuiButton, ButtonProps } from "@material-ui/core"

interface Props extends ButtonProps {
  children: React.ReactNode
  className?: string
}

export default function Button({ children, className, ...rest }: Props) {
  const classNames = className
    ? `default-button ${className}`
    : "default-button"
  return (
    <MuiButton className={classNames} {...rest}>
      {children}
    </MuiButton>
  )
}
