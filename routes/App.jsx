import "@styles/global.scss"

import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import AppContext from "@context/AppContext"
import Checkout from "@pages/Checkout"
import CreateAccount from "@pages/CreateAccount"
import Home from "@pages/Home"
import Layout from "@containers/Layout"
import Login from "@pages/Login"
import MyAccount from "@pages/MyAccount"
import NewPassword from "@pages/NewPassword"
import NotFound from "@pages/NotFound"
import Orders from "@pages/Orders"
import PasswordRecovery from "@pages/PasswordRecovery"
import React from "react"
import SendEmail from "@pages/SendEmail"
import useInitialState from "@hooks/useInitialState"

const App = () => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <Layout>
        <Router basename="/nextjs-practico">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="login" element={<Login />} />
            <Route
              exact
              path="password-recovery"
              element={<PasswordRecovery />}
            />
            <Route exact path="send-email" element={<SendEmail />} />
            <Route exact path="new-password" element={<NewPassword />} />
            <Route exact path="account" element={<MyAccount />} />
            <Route exact path="signup" element={<CreateAccount />} />
            <Route exact path="checkout" element={<Checkout />} />
            <Route exact path="orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Layout>
    </AppContext.Provider>
  )
}

export default App
