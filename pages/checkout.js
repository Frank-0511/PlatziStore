import OrderItem from "@components/OrderItem"
import AppContext from "@context/AppContext"
import styles from "@styles/Checkout.module.scss"
import Head from "next/head"
import { useContext } from "react"

const Checkout = () => {
  const { state } = useContext(AppContext)
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className={styles.checkout}>
        <div className={styles.checkout__container}>
          <h1 className={styles.title}>My order</h1>
          <div className={styles.checkout__content}>
            <div className={styles.order}>
              <p>
                <span>03.25.21</span>
                <span>6 articles</span>
              </p>
              <p>$560.00</p>
            </div>
          </div>
          {state.cart.map((product) => (
            <OrderItem key={`orderItem-${product.id}`} product={product} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Checkout
