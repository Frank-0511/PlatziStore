import AppContext from "@context/AppContext"
import iconBtAddToCart from "@icons/bt_add_to_cart.svg"
import styles from "@styles/ProductItem.module.scss"
import Image from "next/image"
import {useContext} from "react"

const ProductItem = ({product}) => {
  const {addToCart, state} = useContext(AppContext)

  const handleClick = (item) => {
    addToCart(item)
  }
  const {title, price, images} = product

  const isProductIncludeToCart = state.cart.includes(product)

  const styleImage = `${styles.add_to_cart_btn} ${isProductIncludeToCart ? styles.disabled : "pointer"}`

  const imageProduct = images.length > 0 && images[0] !== "" ? images[0] : "https://via.placeholder.com/150"
  return (
    <div className={styles.product_item}>
      <Image
        src={imageProduct}
        alt={title}
        width={240}
        height={240}
        layout="fixed"
        priority={true}
      />
      <div className={styles.product_info}>
        <div>
          <p>${price}</p>
          <p>{title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <Image
            src={iconBtAddToCart}
            alt=""
            className={styleImage}/>
        </figure>
      </div>
    </div>
  )
}

export default ProductItem
