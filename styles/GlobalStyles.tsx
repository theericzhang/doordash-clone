import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        /* System Colors Variables */
        --primary-black: rgba(25, 25, 25, 1);
        --primary-black-transparency-75: rgba(25, 25, 25, 0.75);
        --secondary-black: rgba(73, 73, 73, 1);

        --primary-gray: rgba(231, 231, 231, 1);
        --secondary-gray: rgba(247, 247, 247, 1);
        --tertiary-gray: rgba(96, 96, 96, 1);
        --quaternary-gray: rgba(214, 214, 214, 1);
        --quinary-gray: rgba(118, 118, 118, 1);

        --primary-white: rgba(255, 255, 255, 1);

        --primary-red: rgba(255, 48, 8, 1);
        --secondary-red: rgba(235, 23, 0, 1);
        --tertiary-red: rgba(217, 20, 0, 1);
        --quaternary-red: rgba(183, 16, 0, 1);

        --primary-teal: rgba(0, 131, 138, 1);

        --primary-green: rgba(0, 135, 47, 1);

        --primary-gold: rgba(161, 108, 0, 1);
        
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
`;

export default GlobalStyles;
