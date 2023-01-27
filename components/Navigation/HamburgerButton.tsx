import styled from 'styled-components';

const HamburgerButtonWrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 17px;
    background-color: white;
`;

export default function HamburgerButton() {
    return (
        <HamburgerButtonWrapper aria-label="Main menu">
            <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line
                    x1="1"
                    y1="1"
                    x2="17"
                    y2="1"
                    stroke="#494949"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <line
                    x1="1"
                    y1="6"
                    x2="17"
                    y2="6"
                    stroke="#494949"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <line
                    x1="1"
                    y1="11"
                    x2="17"
                    y2="11"
                    stroke="#494949"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        </HamburgerButtonWrapper>
    );
}
