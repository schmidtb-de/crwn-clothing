import React, { useState } from "react"
import CustomButton from "../custom-button/CustomButton"
import FormInput from "../form-input/FormInput"
import "./SignIn.scss"
import { signInWithGoogle } from "../../firebase/firebase.utils"

function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event) => {
    event.prevent.default()

    setEmail("")
    setPassword("")
  }

  const handleChange = (event) => {
    const { value, name } = event.target

    name === "email" ? setEmail(value) : setPassword(value)
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          value={email}
          handleChange={handleChange}
          required
        />

        <FormInput
          name="password"
          type="password"
          label="password"
          value={password}
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn
