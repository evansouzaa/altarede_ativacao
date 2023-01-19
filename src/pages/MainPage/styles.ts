import styled from "styled-components";

export const MainPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 60vh;

    padding: 50px;
    

    img {
        position: absolute;
        max-width: 300px;
        min-width: 150px;
        z-index: -1;
    }
`