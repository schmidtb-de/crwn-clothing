import React from "react"
import { Route, Switch } from "react-router-dom"
import "./App.scss"
import Homepage from "./pages/homepage/Homepage"
import ShopPage from "./pages/shop/ShopPage"
import Header from "./components/header/Header"
import SignInSignUp from "./pages/sign-in-and-sign-up/SignInSignUp"

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/signin">
          <SignInSignUp />
        </Route>
      </Switch>
    </div>
  )
}

export default App
