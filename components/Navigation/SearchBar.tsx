import styled from "styled-components";
import React from 'react';

type TSearchBar = {
    isSearchBarToggled: boolean;
    setIsSearchBarToggled: React.Dispatch<React.SetStateAction<boolean>>;
}

// Note that if CSS styles are dependent on TS, you need to invoke the styled function this way - announcing the prop ahead, at style declaration

const SearchBar__wrapper = styled("div")<{isSearchBarToggled: boolean}>`
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
    box-sizing: border-box;
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M14.1922 15.6064C13.0236 16.4816 11.5723 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.5723 16.4816 13.0236 15.6064 14.1922L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L14.1922 15.6064ZM15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10Z" fill="#494949"></path></svg>
            <SearchBar__input
                placeholder="Search stores, dishes, products"
            />
        </SearchBar__wrapper>
    );
}