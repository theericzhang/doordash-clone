import styled from "styled-components";
import React from 'react';

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
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L4.84222 10.7436C4.75796 10.8278 4.65733 10.9283 4.57595 11.0242C4.48166 11.1352 4.35611 11.3038 4.28052 11.5365C4.18264 11.8377 4.18264 12.1623 4.28052 12.4635C4.35611 12.6962 4.48166 12.8648 4.57595 12.9758C4.65733 13.0717 4.75796 13.1722 4.84222 13.2564L10.2929 18.7071C10.6834 19.0976 11.3166 19.0976 11.7071 18.7071C12.0976 18.3166 12.0976 17.6834 11.7071 17.2929L7.41421 13L19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11L7.41421 11L11.7071 6.70711Z" fill="#494949"></path></svg>
                :
                    // Shows default search icon
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M14.1922 15.6064C13.0236 16.4816 11.5723 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.5723 16.4816 13.0236 15.6064 14.1922L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L14.1922 15.6064ZM15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10Z" fill="#494949"></path></svg>
            }
            <SearchBar__input
                id="SearchBar__ID"
                placeholder="Search stores, dishes, products"
            />
        </SearchBar__wrapper>
    );
}