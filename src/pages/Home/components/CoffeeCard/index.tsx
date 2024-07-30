import { useState } from "react"
import { QuantityInput } from "../../../../components/Form/QuantityInput"
import * as S from "./styles"
import { ShoppingCart } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

type ProductItemProps = {
  src: string
  title: string
  description: string
  price: number
  tags: string[]
}
export const CoffeeCard = (props: ProductItemProps) => {
  const [quantity, setQuantity] = useState(0)

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity - 1)
  }
  return (
    <S.ProductCard>
      <img src={props.src} alt={props.title} width={120} height={120} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {props.tags.map((tag) => (
          <S.Chip key={tag}>{tag}</S.Chip>
        ))}
      </div>

      <S.Title>{props.title}</S.Title>
      <S.Description>{props.description}</S.Description>

      <S.CartInfos>
        <S.PriceText value="7.90">R$ 7,90</S.PriceText>
        <QuantityInput
          quantity={quantity}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />

        <Link to="/cart">
          <S.IconBox>
            <ShoppingCart size={22} weight="fill" color="white" />
          </S.IconBox>
        </Link>
      </S.CartInfos>
    </S.ProductCard>
  )
}
