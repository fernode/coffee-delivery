import { createGlobalStyle } from "styled-components"
import {mixins} from "./mixins.ts"

export const GlobalStyle = createGlobalStyle`
html {
     font-size: 62.5%; /* 10px/16px = 62.5% */
}
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }
 body {
     background: ${(props) => props.theme.colors.background};
     color: ${(props) => props.theme.colors['base-text']};
     -webkit-font-smoothing: antialiased;
 } 

 body, input, textarea, button {
     ${mixins.fonts.textM};
 }

 button {
     border: none;
     cursor: pointer;
 }
`