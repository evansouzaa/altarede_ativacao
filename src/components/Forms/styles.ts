import styled from "styled-components";

export const FormStyled = styled.form`
    
    input, select {
        width: 100%;
    }

    .button-box {
        display: flex;
        justify-content: space-evenly;
        margin: 15px;
    }

    Button {
        width: 85px;
    }

    .mb-1 > label {
        font-size: 0.7rem;
    }

    hr {
        margin: 5px 0
    }

    ul {
        margin: 0 20px
    }
    ul li {
        list-style: none;
        font-size: 12px;
    }
    ul li:nth-child(1) {
        align-self: center;
    }
`