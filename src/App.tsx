import { ThemeProvider } from "styled-components"
import { theme } from "./theme/theme";
import { MainPage } from "./components/MainPage"
import GlobalStyle from "./theme/global-style"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainPage>
        conteúdo main page
      </MainPage>
    </ThemeProvider>
  )
}

export default App
