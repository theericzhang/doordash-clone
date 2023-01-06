import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        /* System Colors */
        --primary-gray: rgba(231, 231, 231, 1);
        --primary-white: rgba(255, 255, 255, 1);
        --primary-red: rgba(255, 48, 8, 1);
    }

    /* System Fonts */
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