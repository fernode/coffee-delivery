import styled from "styled-components"
import { mixins } from "../../../../styles/mixins.ts"

export const ProductCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 2rem;
  width: 25.6rem;
  margin-bottom: 56px;

  text-align: center;
  border-radius: 10px 50px 20px 50px;
  background-color: ${(props) => props.theme.colors["base-card"]};

  img {
    margin: -45px auto 0 auto;
    display: inline-block;
  }
`

export const Title = styled.span`
  font-size: ${mixins.fonts.textL};
  margin-top: 3.2rem;
  margin-bottom: 1.6rem;
  color: ${(props) => props.theme.colors["base-subtitle"]};
`

export const Description = styled.span`
  font-size: ${mixins.fonts.textL};
  margin-bottom: 1.6rem;
  color: ${(props) => props.theme.colors["base-label"]};
`

export const Chip = styled.span`
  background: ${(props) => props.theme.colors["yellow-light"]};
  width: fit-content;
  border-radius: 20px;
  padding: 8px 12px;
  max-height: 2.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${mixins.fonts.textM};
  text-transform: uppercase;
  margin-top: 1.2rem;
  color: ${(props) => props.theme.colors["yellow-dark"]};
`

export const ChipContainer = styled.div`
  display: flex;
  align-items: center;
`

export const CartInfos = styled.div`
  display: flex;
  align-items: center;
`
