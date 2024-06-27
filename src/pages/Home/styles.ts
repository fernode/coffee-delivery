import styled from "styled-components"
import {mixins} from "../../styles/mixins.ts"

export const Container = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap; 
    
  img {
      margin-left: 5.6rem; 
  }
`

export const Infos = styled.div`
    max-width: 588px;
    h1{
        font-size: ${mixins.fonts.titleXL};
    }
    p{
        font-size: ${mixins.fonts.textL};
        margin-top: 16px;
    }
    margin-bottom: 6.6rem;
`
export const FeatureList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 567px;
    
`


type FeatureListItemProps = {
  background: string
}
export const FeatureListItem = styled.li<FeatureListItemProps>`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    span{
        padding: 8px;
        background-color: ${props => props.background};
        border-radius: 50%;
        display: flex;
        align-items: center;
    }
    p{
        margin-left: 10px;
    }
`