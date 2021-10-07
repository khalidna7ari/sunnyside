import { createGlobalStyle } from "styled-components";
import { mediaQueries, theme } from "../theme";

export const GlobalStyles = createGlobalStyle`
    *::after, 
    *::before, 
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html {
        font-family: "Barlow", serif;
        font-size: 62.5%;
    }

    body {
        max-width: 1440px;
        margin: 0 auto;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Fraunces', serif;
        font-weight: 900;
    }

    h1 {
        font-size: 4rem;
        ${mediaQueries.md}{
            font-size: 5.6rem;
        }
    }
    h2 {
        font-size: 3.2rem;
        ${mediaQueries.md}{
            font-size: 4rem;
        }
    }

    h3 {
        font-size: 2.8rem;
        font-weight: 900;
    }




    p {
        font-size: 1.8rem;
        color: ${theme.colors.darkGrayishBlue};
        font-weight: 600;
        line-height: 1.5;
    }

    .link-btn {
        background: none;
        border: none;
        display: inline;
        font-family: "Fraunces", serif;
        font-size: 1.5rem;
        font-weight: 900;
        text-transform: uppercase;
        position: relative;
        cursor: pointer;
        ${mediaQueries.md}{
            font-size: 1.8rem;
        }
        &::before {
            content: "";
            height: 1rem;
            width: 13.7rem;
            background: ${theme.colors.yellow};
            position: absolute;
            z-index: -1;
            bottom: -0.2rem;
            right: 0;
            left: 50%;
            border-radius: 20px;
            transform: translateX(-50%);
            opacity: 0.5;
            ${mediaQueries.md}{

            }
        }
    }
`;
