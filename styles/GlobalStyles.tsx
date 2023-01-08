import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        /* System Colors Variables */
        --primary-black: rgba(25, 25, 25, 1);

        --primary-gray: rgba(231, 231, 231, 1);
        --secondary-gray: rgba(247, 247, 247, 1);
        --tertiary-gray: rgba(96, 96, 96, 1);
        --quaternary-gray: rgba(214, 214, 214, 1);

        --primary-white: rgba(255, 255, 255, 1);

        --primary-red: rgba(255, 48, 8, 1);
        --secondary-red: rgba(235, 23, 0, 1);
        --tertiary-red: rgba(217, 20, 0, 1);
        
        /* System Font Family Variable */
        --primary-font-family: 'TTNorms';
        
        /* Nav Label Font Option Variables */
        --nav-label-font-size: 14px;
        --nav-label-font-weight: 500;
    }

    * {
        /* Setting default font family and disabling ligatures */
        font-family: var(--primary-font-family);
        font-variant-ligatures: no-common-ligatures;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    /* System Font imports */
    @font-face {
        font-family: TTNorms;
        font-style: normal;
        font-weight: 800;
        src: url("/fonts/TTNorms/TTNorms-Heavy.woff2") format("woff2");
    }

    @font-face {
        font-family: TTNorms;
        font-style: normal;
        font-weight: 700;
        src: url("/fonts/TTNorms/TTNorms-Black.woff2") format("woff2");
    }

    @font-face {
        font-family: TTNorms;
        font-style: normal;
        font-weight: 600;
        src: url("/fonts/TTNorms/TTNorms-ExtraBold.woff2") format("woff2");
    }

    @font-face {
        font-family: TTNorms;
        font-style: normal;
        font-weight: 500;
        src: url("/fonts/TTNorms/TTNorms-Bold.woff2") format("woff2");
    }

    @font-face {
        font-family: TTNorms;
        font-style: normal;
        font-weight: 400;
        src: url("/fonts/TTNorms/TTNorms-Medium.woff2") format("woff2");
    }

    @font-face {
        font-family: TTNorms;
        font-style: normal;
        font-weight: 300;
        src: url("/fonts/TTNorms/TTNorms-Light.woff2") format("woff2");
    }

    @font-face {
        font-family: TTNorms;
        font-style: normal;
        font-weight: 200;
        src: url("/fonts/TTNorms/TTNorms-ExtraLight.woff2") format("woff2");
    }

    @font-face {
        font-family: TTNorms;
        font-style: normal;
        font-weight: 100;
        src: url("/fonts/TTNorms/TTNorms-Thin.woff2") format("woff2");
    }
`