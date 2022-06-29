import OrderItem from "@components/OrderItem"
import AppContext from "@context/AppContext"
import iconArrow from "@icons/flechita.svg"
import styles from "@styles/MyOrder.module.scss"
import Image from "next/image"
import {useContext} from "react"

const MyOrder = () => {
  const {state} = useContext(AppContext)

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price
    return state.cart.reduce(reducer, 0)
  }

  return (
    <aside className={styles.my_order}>
      <div className={styles.my_order__title_container}>
        <Image src={iconArrow} alt="arrow"/>
        <p className={styles.title}>My order</p>
      </div>
      <div className={styles.my_order__content}>
        {state.cart.map((product) => (
          <OrderItem key={`orderItem-${product.id}`} product={product}/>
        ))}
        <div className={styles.order}>
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className={styles.primary_button}>Checkout</button>
      </div>
    </aside>
  )
}

export default MyOrder
