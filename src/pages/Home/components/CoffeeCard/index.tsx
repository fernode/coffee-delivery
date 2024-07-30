import * as S from "./styles"

type ProductItemProps = {
  src: string
  title: string
  description: string
  price: number,
  tags: string[]
}
export const CoffeeCard = (props: ProductItemProps) => {
  return (
    <S.ProductCard>
      <img src={props.src} alt={props.title} width={120} height={120}/>
      <div>
        {props.tags.map(tag => (
          <S.Chip key={tag}>
            {tag}
          </S.Chip>
        ))}
      </div>

      <S.Title>
        {props.title}
      </S.Title>
      <S.Description>
        {props.description}
      </S.Description>

      <S.CartInfos>
        <data>R$ 9,90</data>
        <div><input type={"number"} min={0}/></div>
      </S.CartInfos>
    </S.ProductCard>
  )
}
