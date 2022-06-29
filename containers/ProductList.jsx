import ProductItem from "@components/ProductItem"
import useGetProducts from "@hooks/useGetProducts"

import styles from "@styles/ProductList.module.scss"

const API = "https://api.escuelajs.co/api/v1/products/?limit=20&offset=0"

const ProductList = () => {
  const products = useGetProducts(API)

  return (
    <section>
      <div className={styles.product_list}>
        {products.map((product) => (
          <ProductItem key={`productItem-${product.id}`} product={product}/>
        ))}
      </div>
    </section>
  )
}

export default ProductList
