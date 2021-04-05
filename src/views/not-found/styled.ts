import styled, { keyframes } from "styled-components";

const type = keyframes`
    from{box-shadow: inset -3px 0px 0px #888;}
    to{box-shadow: inset -3px 0px 0px transparent;}
`;

export const WrapperSC = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TitleSC = styled.h1`
    font-size: 50px;
    display: inline-block;
    padding-right: 12px;
    animation: ${type} 0.5s alternate infinite;
    margin-bottom: 1.5em;
`;

export const ButtonSC = styled.span`
    font-size: 25px;
    border: 2px solid gray;
    padding: 0.3em 1.5em;
    border-radius: 1em;
    cursor: pointer;
    font-weight: bold;
    transition: 0.2s ease;
    position: relative;
    overflow: hidden;
    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 0%;
        height: 100%;
        background: gray;
        z-index: -1;
        transition: 0.2s ease;
    }
    &:hover {
        color: white;
        background: gray;
        transition: 0.2s ease;
        &:before {
            width: 100%;
        }
    }
`;
