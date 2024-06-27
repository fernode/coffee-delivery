import {ThemeProvider} from "styled-components"
import {defaultTheme} from "./styles/theme/defaultTheme.ts"
import {GlobalStyle} from "./styles/global.ts"
import {Header} from "./components/Header"
import {Outlet} from "react-router-dom"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Header/>
      <Outlet/>
    </ThemeProvider>
  )
}

export default App
