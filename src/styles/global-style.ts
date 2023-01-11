import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: #dddddd;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .App {
        max-width: 48rem;
        margin: 30px 15px;
    }
`