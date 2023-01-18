import styled from "styled-components";

export const FormLocationContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    .map-style {
        overflow: auto;
        border-radius: 8px;
        margin: 0 auto;
        background-color: #c1c1c1;
        width: 100%;
        height: 330px;
    }

    p {
        font-size: 14px;
        text-align: center;
        min-height: 21px;
        margin-bottom: 0;
    }

    Button {
        margin: 3px auto 0 auto;
        min-width: 145px;
    }
`