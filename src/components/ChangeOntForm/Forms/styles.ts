import styled from "styled-components";

export const FormStyled = styled.form`

    display: flex;
    flex-direction: column;
    
    input, select {
        width: 100%;
    }

    .button-box {
        display: flex;
        justify-content: space-evenly;
        margin: 15px;
    }

    Button {
        min-width: 85px;
    }

    .btn-send-active {
        margin: 10px auto 0 auto;
        max-width: 250px;
    }

    .mb-1 > label {
        font-size: 0.7rem;
    }

    hr {
        margin: 5px 0
    }
    ul {
    display: block;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 15px;
    margin-inline-end: 15px;
    padding-inline-start: 0px;
}

    ul li {
        list-style: none;
        font-size: 12px;
    }

    .wppMessage {
        background-color: #128C7E;
        padding: 1.2rem;
        border-radius: 0.5rem;
        color: white;
    }

`