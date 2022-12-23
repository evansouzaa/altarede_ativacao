import { ThemeProvider } from "styled-components"
import { theme } from "./theme/theme";
import { MainPage } from "./components/MainPage"
import GlobalStyle from "./theme/global-style"
import { useState } from "react";

import { Input } from "./components/Input";

function App() {

  type Props = {
    client: string,
    login: string
  }
  
  const [state, setState] = useState(false)
  const [value, setValue] = useState<Props>({
    client: "",
    login: "",
  })

  function handleChange(e: React.FormEvent<HTMLInputElement>){
    const newValue = {client: e.currentTarget.value}
    console.log(newValue)
    console.log(e.currentTarget)
    setValue(value => ({
        ...value,
        ...newValue
    })
    )
  }

  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <MainPage>
          {state === true && <Input setValue={setValue} tag="Nome" type="text" id="nome" value={value.client} placeholder="Digite Nome do cliente"></Input>}
          {state === false && <Input setValue={setValue} tag="Login" type="text" id="login" value={value.login} placeholder="Digite login do cliente"></Input>}
          
          <button onClick={() => setState(!state)}>Change</button>

          <input type="text" onChange={handleChange} value={value.client} />
          <input type="text" onChange={handleChange} value={value.login} />
          <h1>{}</h1>
      </MainPage>
    </ThemeProvider>
  )
}

export default App
