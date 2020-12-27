import { useHistory, useRouteMatch } from "react-router-dom"

export function useNavigation() {
  const history = useHistory()
  const match = useRouteMatch()

  const linkTo = (path: string) => {
    history.push(path)
  }

  const matchTo = (path: string) => {
    history.push(`${match.url}${path}`)
  }

  const navigation = {
    linkTo,
    matchTo
  }

  return navigation
}