import {ThemeProvider} from "styled-components"
import {defaultTheme} from "./styles/theme/defaultTheme.ts"
import {GlobalStyle} from "./styles/global.ts"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}><GlobalStyle/></ThemeProvider>
  )
}

export default App
