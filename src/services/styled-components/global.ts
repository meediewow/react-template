import { createGlobalStyle, css } from "styled-components";

const globalStylesCss = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
    }
    html {
        position: relative;
        height: 100%;
    }
    body {
        /* height: 100vh; */
        flex-direction: column;
    }
    #root {
        flex: 1;
        > div {
            height: 100%;
        }
    }

    a:not([href]) {
        cursor: pointer;
    }
`;

export const GlobalStyles = createGlobalStyle`${globalStylesCss};`;
