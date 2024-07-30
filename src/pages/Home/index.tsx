import {Coffee, Package, ShoppingCart, Timer} from "@phosphor-icons/react"

import * as S from './styles.ts'
import {defaultTheme} from "../../styles/theme/defaultTheme.ts"
import {coffees} from "../../../data.json"
import {CoffeeCard} from "./components/CoffeeCard"

export function Home() {
  return (
    <main>
      <S.HeroContainer>
        <div>
          <S.Infos>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver , a qualquer
              hora</p>
          </S.Infos>

          <S.FeatureList>
            <S.FeatureListItem background={defaultTheme.colors["yellow-dark"]}>
              <span><ShoppingCart size={16} color={defaultTheme.colors.white}/></span>
              <p>Compra simples e segura</p>
            </S.FeatureListItem>
            <S.FeatureListItem background={defaultTheme.colors["yellow"]}>
              <span><Timer size={16} color={defaultTheme.colors.white}/></span>
              <p>Entrega rápida e rastreada</p>
            </S.FeatureListItem>
            <S.FeatureListItem background={defaultTheme.colors["base-text"]}>
              <span><Package size={16} color={defaultTheme.colors.white}/></span>
              <p>Embalagem mantém o café intacto</p>
            </S.FeatureListItem>
            <S.FeatureListItem background={defaultTheme.colors["purple-dark"]}>
              <span><Coffee size={16} color={defaultTheme.colors.white}/></span>
              <p>O café chega fresquinho até você</p>
            </S.FeatureListItem>
          </S.FeatureList>
        </div>
        <img src="/images/hero.svg" alt="Café do Coffee Delivery"/>
      </S.HeroContainer>

      <S.ProductsSection>
        <h2>Nossos cafés</h2>

        <S.ProductsList>
          {coffees.map((coffee, index) => (
            <CoffeeCard key={index} description={coffee.description} title={coffee.title}
              price={Number(coffee.price)} src={coffee.image}
              tags={coffee.tags}
            />
          ))}
        </S.ProductsList>
      </S.ProductsSection>
    </main>
  )
}
