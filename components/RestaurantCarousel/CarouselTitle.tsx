import styled from 'styled-components';

const CarouselTitleHeader = styled.h2`
    font-size: 24px;
    font-weight: 500;
    color: var(--primary-black);
`;

type TCarouselTitle = {
    carouselName: string;
};

export default function CarouselTitle({ carouselName }: TCarouselTitle) {
    return (
        <CarouselTitleHeader>
            {carouselName}
        </CarouselTitleHeader>
    );
}
