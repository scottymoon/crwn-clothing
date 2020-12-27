import { Route, Switch } from "react-router-dom"
import HomePage from "../../pages/HomePage"
import ShopPage from "../../pages/ShopPage"

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/:item" component={ShopPage} />
      </Switch>
    </div>
  )
}
