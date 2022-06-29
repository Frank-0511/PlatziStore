import React, { useContext, useState } from "react"

import AppContext from "@context/AppContext"
import Image from "next/image"
import Menu from "@components/Menu"
import MyOrder from "@containers/MyOrder"
import iconMenu from "@icons/icon_menu.svg"
import iconShoppingCart from "@icons/icon_shopping_cart.svg"
import logoYardSale from "@logos/logo_yard_sale.svg"
import styles from "@styles/Header.module.scss"

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [toggleOrders, setToggleOrders] = useState(false)
  const { state } = useContext(AppContext)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <nav className={styles.navbar}>
      <Image src={iconMenu} alt="menu" className={styles.menu} />
      <div className={styles.navbar__left}>
        <Image
          src={logoYardSale}
          alt="logo"
          className={styles.logo}
          priority={true}
        />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">{"Furniture's"}</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className={styles.navbar__right}>
        <ul>
          <li className={styles.navbarEmail} onClick={handleToggle}>
            admin@example.com
          </li>
          <li
            className={styles.navbar__shopping_cart}
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <Image src={iconShoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  )
}

export default Header
