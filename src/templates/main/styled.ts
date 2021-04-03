import styled from "styled-components";
import { Layout } from "antd";

export const LogoSC = styled.div`
    height: 40px;
    display: flex;
    margin: 10px;
    color: #ffffff;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
`;

export const LayoutSC = styled(Layout)`
    min-height: 100vh;
`;

export const TitleSC = styled.h1`
    font-size: 24px;
    margin-bottom: 0;
`;

export const TitleWrapperSC = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
`;
