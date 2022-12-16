import { ThemeProvider } from "styled-components"
import { theme } from "./theme/theme";
import { MainPage } from "./components/MainPage"
import GlobalStyle from "./theme/global-style"
import { Input } from "./components/Input";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainPage>
        <Input tag="Texto" type="text"></Input>
      </MainPage>
    </ThemeProvider>
  )
}

export default App
