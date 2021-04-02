import { LikeButtonSC } from "components/like-button/styled";
import styled from "styled-components";

export const ImageSC = styled.img`
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
`;

export const WrapperSC = styled.div`
    transition: all 1s;
    margin: 0;
    :hover {
        transform: scale(1.05);
        img {
            filter: brightness(0.5);
        }
        box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.64);
        ${LikeButtonSC} {
            opacity: 1;
            z-index: 2;
        }
    }
    &:nth-child(3n + 1) {
        grid-row: span 2;
    }
    &:nth-child(2n + 1) {
        grid-row: span 3;
    }
    &:nth-child(4n) {
        grid-column: span 2;
    }
`;
