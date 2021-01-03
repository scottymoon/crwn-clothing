import { Route, Switch } from "react-router-dom"
import AuthPage from "../../pages/AuthPage"
import HomePage from "../../pages/HomePage"
import ShopPage from "../../pages/ShopPage"
import Header from "../Header"

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/auth" component={AuthPage} />
      </Switch>
    </div>
  )
}
