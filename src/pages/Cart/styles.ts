import styled from "styled-components"
import { mixins } from "../../styles/mixins"

export const CartContainer = styled.section`
  max-width: 1120px;
  margin: 5.6rem auto 0 auto;
  display: flex;
  flex-wrap: wrap;
`
export const Title = styled.h2`
  font-size: ${mixins.fonts.textL};
  margin-top: 3.2rem;
  margin-bottom: 1.6rem;
  color: ${(props) => props.theme.colors["base-subtitle"]};
`

export const InfoTitle = styled.h3`
  font-size: ${mixins.fonts.textM};
  color: ${(props) => props.theme.colors["base-subtitle"]};
`
export const InfoSubTitle = styled.p`
  font-size: ${mixins.fonts.textS};
  margin-bottom: 1.6rem;
  color: ${(props) => props.theme.colors["base-text"]};
`

export const FormContainer = styled.div`
  background-color: ${(props) => props.theme.colors["base-card"]};
  padding: 4rem;
`
export const CreditCardContainer = styled.div`
  margin-top: 1.6rem;
  background-color: ${(props) => props.theme.colors["base-card"]};
  padding: 4rem;
`

export const FormInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    "cep . ."
    "street street street"
    "number fullAddress fullAddress"
    "neighborhood city state";
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`
