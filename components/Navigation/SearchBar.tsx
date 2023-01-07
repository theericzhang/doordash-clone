import styled from "styled-components";
import React from 'react';

type TSearchBar = {
    setIsSearchBarToggled: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar__wrapper = styled.div`
    height: 40px;
    width: fit-content;
    border-radius: 23px;
    background-color: var(--secondary-gray);
`;

export default function SearchBar({ setIsSearchBarToggled }: TSearchBar) {
    return (
        <SearchBar__wrapper>

        </SearchBar__wrapper>
    );
}