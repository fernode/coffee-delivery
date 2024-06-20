import {ThemeProvider} from "styled-components"
import {defaultTheme} from "./styles/theme/defaultTheme.ts"
import {GlobalStyle} from "./styles/global.ts"
import {Header} from "./components/Header"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Header/>
    </ThemeProvider>
  )
}

export default App
