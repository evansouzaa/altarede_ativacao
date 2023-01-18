import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: #dddddd;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .App {
        max-width: 480px;
        margin: 10px auto 0 auto
    }
`