import styled from "styled-components";

export const LoadingContainer = styled.div<{ statusLoading: boolean }>`
    display: ${(props) => props.statusLoading ? "none" : "flex"};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .25);
    height: 100%;

    justify-content: center;
    align-items: center;
`