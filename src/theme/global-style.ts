import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        font-size:62.5%;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 1rem;
    }
`

export default GlobalStyle;