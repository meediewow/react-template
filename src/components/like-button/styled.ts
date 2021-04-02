import styled, { keyframes, css } from "styled-components";

const paw = keyframes`
    0% {
        transform: translateX(var(--x));
    }
    35% {
        transform: translateX(-16px);
    }
    55%,
    70% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-12px);
    }
`;

const pawClap = keyframes`
    50%,
    70% {
        transform: translate(0, 0);
    }
`;

export const LikeButtonSC = styled.div<{
    isLiked: boolean;
    isAnimate: boolean;
}>`
    --background: #fff;
    --background-active: #fee8f4;
    --border: #f1eceb;
    --border-active: #eec2db;
    --text: #000;
    --number: #9c9496;
    --number-active: #000;
    --heart-background: #fff;
    --heart-background-active: #fea5d7;
    --heart-border: #c3c2c0;
    --heart-border-active: #2b2926;
    --heart-shadow-light: #fee0f2;
    --heart-shadow-dark: #ea5daf;
    --paw-background: #fff;
    --paw-border: #201e1b;
    --paw-shadow: #eeeded;
    --paw-inner: var(--heart-background-active);
    --paw-shadow-light: var(--heart-shadow-light);
    --paw-shadow-dark: var(--heart-shadow-dark);
    --paw-clap-background: #fef0a5;
    --paw-clap-border: var(--paw-border);
    --paw-clap-shadow: #fed75c;
    --circle: #df3dce;
    --circle-line: #000;

    display: inline-flex;
    text-decoration: none;
    font-weight: bold;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    opacity: 0;
    z-index: -1;
    transition: 0.15s linear;
    line-height: 19px;
    padding: 12px 16px;
    &:before {
        content: "";
        position: absolute;
        display: block;
        left: -2px;
        top: -2px;
        bottom: -2px;
        right: -2px;
        z-index: 1;
        border-radius: 5px;
        transition: background 0.45s, border-color 0.45s;
        background: var(--background);
        border: 2px solid var(--border);
    }
    svg {
        display: block;
        height: 25px;
        width: 25px;
    }
    .text {
        position: relative;
        backface-visibility: hidden;
        transform: translateZ(0);
        z-index: 3;
        margin-right: 8px;
        transition: width 0.25s;
        width: var(--w, 60px);
        span,
        svg {
            transition: transform 0.15s ease-out, opacity 0.2s;
            opacity: var(--o, 1);
        }
        span {
            display: block;
            position: absolute;
            left: 30px;
            top: 0;
            transform: translateY(var(--y, 0));
            color: var(--text);
        }
        svg {
            --background: var(--heart-background);
            --border: var(--heart-border);
            --shadow-light: transparent;
            --shadow-dark: transparent;
            width: 21px;
            height: 19px;
            transform: translateX(var(--x));
        }
    }
    & > span {
        display: block;
        position: relative;
        backface-visibility: hidden;
        transform: translateZ(0);
        z-index: 2;
        color: var(--number);
    }
    .paws {
        overflow: hidden;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 60px;
        z-index: 2;
        svg {
            position: absolute;
            bottom: 0;
            transition: transform 0.3s ease-out, opacity 0.2s;
            opacity: var(--o, 0);
            transform: translate(var(--x, 0), var(--y, 0));
            &.paw {
                --x: -24px;
                width: 30px;
                height: 37px;
                left: 32px;
            }
            &.paw-clap {
                --x: 16px;
                --y: 34px;
                --o: 1;
                width: 29px;
                height: 34px;
                left: 34px;
            }
        }
        .paw-effect {
            left: 26px;
            top: 12px;
            width: 44px;
            height: 44px;
            position: absolute;
            &:before {
                content: "";
                display: block;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background: var(--circle);
                transform: scale(var(--s, 0));
                opacity: var(--o, 1);
                transition: transform 0.15s ease 0.16s,
                    opacity 0.2s linear 0.25s;
            }
            div {
                width: 2px;
                height: 6px;
                border-radius: 1px;
                left: 50%;
                bottom: 50%;
                margin-left: -1px;
                position: absolute;
                background: var(--circle-line);
                transform: translateY(-24px) scaleX(0.7) scaleY(var(--s, 0));
                &:before,
                &:after {
                    content: "";
                    display: block;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: inherit;
                    border-radius: inherit;
                    transform: translate(var(--x, -22px), var(--y, 4px))
                        rotate(var(--r, -45deg)) scaleX(0.8) scaleY(var(--s, 0));
                }
                &:after {
                    --x: 22px;
                    --r: 45deg;
                }
            }
            div,
            div:before,
            div:after {
                opacity: var(--o, 1);
                transform-origin: 50% 100%;
                transition: transform 0.12s ease 0.17s,
                    opacity 0.18s linear 0.21s;
            }
        }
    }
    ${({ isLiked }) =>
        !isLiked &&
        css`
            &:hover {
                .text {
                    --o: 0;
                    --x: 12px;
                    --y: 8px;
                }
                .paws {
                    svg {
                        &.paw {
                            --o: 1;
                            --x: 0;
                        }
                    }
                }
            }
        `}
    ${({ isAnimate }) =>
        isAnimate &&
        css`
            .text {
                --o: 0;
                svg {
                    --background: var(--heart-background-active);
                    --border: var(--heart-border-active);
                    --shadow-light: var(--heart-shadow-light);
                    --shadow-dark: var(--heart-shadow-dark);
                }
            }
            .paws {
                svg {
                    &.paw {
                        --x: 0;
                        --o: 1;
                        transition-delay: 0s;
                        animation: ${paw} 0.45s ease forwards;
                    }
                    &.paw-clap {
                        animation: ${pawClap} 0.5s ease-in forwards;
                    }
                }
                .paw-effect {
                    --s: 1;
                    --o: 0;
                }
            }
        `};
    ${({ isLiked }) =>
        isLiked &&
        css`
            --background: var(--background-active);
            --border: var(--border-active);
            .text {
                --w: 21px;
                svg {
                    --o: 1;
                }
            }
            & > span {
                --number: var(--number-active);
            }
            .paws {
                svg {
                    &.paw {
                        --o: 0;
                        transition: opacity 0.15s linear 0.2s forwards;
                    }
                }
            }
        `}
`;
