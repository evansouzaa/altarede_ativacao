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
        margin-top: 10px;
        align-self: center;
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

    .hr-lines:before {
        content:" ";
        display: block;
        height: 2px;
        width: 15%;
        position: absolute;
        top: 50%;
        left: 10%;
        background: red;
    }

    .hr-lines {
        position: relative;
        /*  new lines  */
        max-width: 500px;
        text-align: center;
    }

    .hr-lines:after {
        content:" ";
        height: 2px;
        width: 15%;
        background: red;
        display: block;
        position: absolute;
        top: 50%;
        right: 10%;
    }
`