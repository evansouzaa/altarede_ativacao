import styled from "styled-components";

export const InputStyled = styled.div`
    max-width: 50rem;
    padding: 0 0.5rem 0.5rem 0.5rem;

    label {
        display: block;
        font-size: 1.2rem;
        color: ${({theme}) => theme.light.secondaryColor};
    }

    input {
        padding: 0.8rem;
        font-size: 1.5rem;
        border: none;
        border-radius: 0.8rem;
        outline: none;
        background-color: ${({theme}) => theme.light.secondaryColor};
    }
    
`