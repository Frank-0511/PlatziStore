import "@styles/Login.scss"
import logoYardSale from "@logos/logo_yard_sale.svg"
import React, { useRef } from "react"

const Login = () => {
  const form = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    }
    console.table(data)
  }

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logoYardSale} alt="logo" className="logo" />
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="admin@example.com"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />
          <button
            className="primary-button login-button"
            onClick={handleSubmit}
          >
            Log in
          </button>
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  )
}

export default Login
