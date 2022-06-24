import AppContext from "@context/AppContext"
import iconBtAddToCart from "@icons/bt_add_to_cart.svg"
import React, { useContext } from "react"
import "@styles/ProductItem.scss"

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext)

  const handleClick = (item) => {
    addToCart(item)
  }
  const { title, price, images } = product
  return (
    <div className="ProductItem">
      <img src={images[0]} alt={title} />
      <div className="product-info">
        <div>
          <p>${price}</p>
          <p>{title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={iconBtAddToCart} alt="" />
        </figure>
      </div>
    </div>
  )
}

export default ProductItem
