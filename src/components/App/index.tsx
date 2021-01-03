import { Redirect, Route, Switch } from "react-router-dom"
import { useAppState } from "../../hooks/useAppState"
import AuthPage from "../../pages/AuthPage"
import HomePage from "../../pages/HomePage"
import ShopPage from "../../pages/ShopPage"
import Header from "../Header"

export default function App() {
  const { signedIn } = useAppState()

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/auth"
          render={() => (signedIn ? <Redirect to="/" /> : <AuthPage />)}
        />
      </Switch>
    </div>
  )
}
