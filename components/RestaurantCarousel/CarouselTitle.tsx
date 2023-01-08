import styled from "styled-components";

const CarouselTitleHeader = styled.h2`
    font-size: 24px;
    font-weight: 500;
    color: var(--primary-black);
`;

export default function CarouselTitle() {
    return (
        <CarouselTitleHeader>
            Now on DoorDash
        </CarouselTitleHeader>
    );
}