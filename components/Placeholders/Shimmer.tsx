import styled, { keyframes } from 'styled-components';

const ShimmerKeyframes = keyframes`
    0% {
      background-position: -150px 0;
    }
    
    100% {
      background-position: 150px 0; 
    }
`;

const ShimmerPlaceholder = styled.div`
    background-color: #F0F3F4;
    background: #f6f7f8;
    background-image: linear-gradient(to right, var(--secondary-gray) 0%, var(--primary-gray) 40%, var(--secondary-gray) 80%, var(--secondary-gray) 100%);
    background-repeat: no-repeat;
    background-size: 100%; 
    display: inline-block;
    position: relative;
    height: 100%;
    width: 100%;
    z-index: 2;
    
    /* animation parameters */
    animation-duration: 0.7s;
    animation-fill-mode: forwards; 
    animation-iteration-count: infinite;
    animation-name: ${ShimmerKeyframes};
    animation-timing-function: linear;
`;

export default function Shimmer() {
    return (
        <ShimmerPlaceholder />
    );
}
