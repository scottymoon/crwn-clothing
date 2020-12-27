import { Route, Switch } from "react-router-dom"
import HomePage from "../../pages/HomePage"
import ShopPage from "../../pages/ShopPage"
import Header from "../Header"

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/shop/:item" component={ShopPage} />
      </Switch>
    </div>
  )
}
