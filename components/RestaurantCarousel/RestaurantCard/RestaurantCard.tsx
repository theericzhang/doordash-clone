import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const RestaurantCard__article = styled.article`
    width: 374px;
    height: 245px;
`;

const RestaurantCard__link = styled.a`
    text-decoration: none;
`;

const RestaurantCard__image__wrapper = styled.div`
    width: 100%;
    height: 172px;
    border-radius: 3px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const RestaurantCard__image = styled(Image)`
    object-fit: cover;
`;

export default function RestaurantCard() {
    return (
        <RestaurantCard__article>
            <Link 
                href=""
                passHref
                legacyBehavior
            >
                <RestaurantCard__link>
                    <RestaurantCard__image__wrapper>
                        <RestaurantCard__image 
                            src='/images/BellissimoPizza.avif'
                            alt={'A closeup of a New York style pizza pie'}
                            fill={true}
                        />    
                    </RestaurantCard__image__wrapper>
                </RestaurantCard__link>
            </Link>
        </RestaurantCard__article>
    );
}