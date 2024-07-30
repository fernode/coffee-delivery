import styled from "styled-components"
import { mixins } from "../../styles/mixins.ts"

export const HeroContainer = styled.section`
  max-width: 1120px;
  margin: 5.6rem auto 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  img {
    margin-left: 5.6rem;
  }
`

export const Infos = styled.div`
  max-width: 588px;

  h1 {
    font-size: ${mixins.fonts.titleXL};
  }

  p {
    font-size: ${mixins.fonts.textL};
    margin-top: 16px;
  }

  margin-bottom: 6.6rem;
`
export const FeatureList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  max-width: 567px;
`

type FeatureListItemProps = {
  background: string
}
export const FeatureListItem = styled.li<FeatureListItemProps>`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  span {
    padding: 8px;
    background-color: ${(props) => props.background};
    border-radius: 50%;
    display: flex;
    align-items: center;
  }

  p {
    margin-left: 10px;
  }
`

export const ProductsSection = styled.section`
  max-width: 1120px;
  margin: 6.4rem auto 0 auto;

  h2 {
    margin-bottom: 4rem;
    color: ${(props) => props.theme.colors["base-subtitle"]};
    font-size: ${mixins.fonts.titleL};

    @media (max-width: 768px) {
      text-align: center;
    }
  }
`

export const ProductsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  justify-items: center;
`
