import React from "react"
import { Route, Switch } from "react-router-dom"
import "./App.scss"
import Homepage from "./pages/homepage/Homepage"
import ShopPage from "./pages/shop/ShopPage"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App
