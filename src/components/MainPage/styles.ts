import styled from "styled-components";

export const MainPageStyled = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.blackColor};

    color : ${({theme}) => theme.primaryColor};
    font-size: 1.6rem;
`