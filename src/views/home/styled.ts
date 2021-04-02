import styled from "styled-components";

export const ImagesWrapperSC = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: minmax(100px, 150px);
    grid-auto-flow: dense;
    margin: 15px auto;
    grid-gap: 15px;

    @media screen and (max-width: 720px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: minmax(50px, 100px);
    }
`;

export const MessageWrapperSC = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
