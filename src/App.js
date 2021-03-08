import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import "./App.scss"
import Homepage from "./pages/homepage/Homepage"
import ShopPage from "./pages/shop/ShopPage"
import Header from "./components/header/Header"
import SignInSignUp from "./pages/sign-in-and-sign-up/SignInSignUp"
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    let unsubscribeFromAuth = null
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          })
        })
      } else {
        setCurrentUser({ currentUser: userAuth })
      }
    })
    return () => {
      unsubscribeFromAuth()
    }
  }, [])

  return (
    <div>
      <Header currentUser={currentUser} />
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
