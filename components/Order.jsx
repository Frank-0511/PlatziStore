import iconFlechita from "@icons/flechita.svg"
import Image from "next/image"

const Order = () => {
  return (
    <div className="Order">
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <Image src={iconFlechita} alt="arrow"/>
    </div>
  )
}

export default Order
