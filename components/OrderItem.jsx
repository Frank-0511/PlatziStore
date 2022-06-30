import AppContext from "@context/AppContext"
import iconClose from "@icons/icon_close.png"
import styles from "@styles/OrderItem.module.scss"
import Image from "next/image"
import {useContext} from "react"

const OrderItem = ({product}) => {
  const {images, title, price} = product
  const {removeFromCart} = useContext(AppContext)

  const handleRemove = (item) => {
    removeFromCart(item)
  }

  return (
    <div className={styles.order_item}>
      <figure>
        <Image src={images[0]} alt={title} layout="fixed" height={70} width={70}/>
      </figure>
      <p>{title}</p>
      <p>${price}</p>
      <Image src={iconClose} className="pointer" alt="close" onClick={() => handleRemove(product)}/>
    </div>
  )
}

export default OrderItem
