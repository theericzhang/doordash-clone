import styled from "styled-components";
import React from 'react';
import BackArrow from '../Icons/BackArrow';
import MagnifyingGlass from '../Icons/MagnifyingGlass';

type TSearchBar = {
    isSearchBarToggled: boolean;
    setIsSearchBarToggled: React.Dispatch<React.SetStateAction<boolean>>;
}

// Note that if CSS styles are dependent on TS, you need to invoke the styled function this way - announcing the prop ahead, at style declaration

const SearchBar__wrapper = styled("label")<{isSearchBarToggled: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    height: 40px;
    padding: ${props => props.isSearchBarToggled ? "0 11px" : "0 13px"};
    width: 428px;
    border-radius: 23px;
    border: 2px solid var(--primary-black);
    border: ${props => props.isSearchBarToggled ? "2px solid var(--primary-black)" : "none"};
    background-color: var(--secondary-gray);

    &:hover {
        cursor: text;
    }
`;

const SearchBar__input = styled.input`
    width: 100%;
    max-height: 24px;
    border: none;
    background-color: transparent;
    color: var(--primary-black);
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 0ch;

    &:focus {
        outline: none;
    }

    &::placeholder {
        font-size: 16px;
    }
`

export default function SearchBar({ isSearchBarToggled, setIsSearchBarToggled }: TSearchBar) {
    
    console.log(isSearchBarToggled);
    
    function searchBarOnClick() {
        setIsSearchBarToggled(true);
    }

    function searchBarOnBlur() {
        setIsSearchBarToggled(false);
    }

    return (
        <SearchBar__wrapper 
            onClick={searchBarOnClick}
            onBlur={searchBarOnBlur}
            isSearchBarToggled={isSearchBarToggled}
        >
            {
                isSearchBarToggled ?
                    // Show back button
                    <BackArrow />
                :
                    // Shows default search icon
                    <MagnifyingGlass />
            }
            <SearchBar__input
                id="SearchBar__ID"
                placeholder="Search stores, dishes, products"
            />
        </SearchBar__wrapper>
    );
}