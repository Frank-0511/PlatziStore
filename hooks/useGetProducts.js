import axios from "axios"
import { useEffect, useState } from "react"

const useGetProducts = (API) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(API)
      setProducts(response.data)
      return response
    }
    fetchData().catch(console.error)
  }, [])

  return products
}

export default useGetProducts
