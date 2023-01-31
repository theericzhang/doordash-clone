import styled from 'styled-components';
import React, { useCallback } from 'react';
import BackArrow from '../Icons/BackArrowIcon';
import MagnifyingGlass from '../Icons/MagnifyingGlassIcon';

type TSearchBar = {
    isSearchBarToggled: boolean;
    setIsSearchBarToggled: React.Dispatch<React.SetStateAction<boolean>>;
};

// Note that if CSS styles are dependent on TS, you need to invoke the
// styled function this way - announcing the prop ahead, at style declaration

const SearchBarWrapper = styled('label')<{ isSearchBarToggled: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    height: 40px;
    padding: ${(props) => (props.isSearchBarToggled ? '0 11px' : '0 13px')};
    width: 428px;
    border-radius: 23px;
    border: 2px solid var(--primary-black);
    border: ${(props) => (props.isSearchBarToggled ? '2px solid var(--primary-black)' : 'none')};
    background-color: var(--secondary-gray);

    &:hover {
        cursor: text;
    }

    @media screen and (max-width: 1280px) {
        
    }

    @media screen and (max-width: 1185px) {
        /* width: fit-content; */
        width: 300px;
    }

    @media screen and (max-width: 960px) {
        width: 100%;
        max-width: 460px;
    }

    @media screen and (max-width: 770px) {
        width: 100%;
        max-width: 550px;
    }
`;

const SearchBarInput = styled.input`
    width: 91%;
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
        color: var(--tertiary-gray);
        text-overflow: ellipsis;
    }
`;

export default function SearchBar({ isSearchBarToggled, setIsSearchBarToggled }: TSearchBar) {
    // function searchBarOnClick() {
    //     setIsSearchBarToggled(true);
    // }

    const searchBarOnClick = useCallback(() => {
        setIsSearchBarToggled(true);
    }, [setIsSearchBarToggled]);

    // function searchBarOnBlur() {
    //     setIsSearchBarToggled(false);
    // }

    const searchBarOnBlur = useCallback(() => {
        setIsSearchBarToggled(false);
    }, [setIsSearchBarToggled]);

    return (
        // disabled this rule as we need to trigger focus when the entire wrapper is clicked
        // eslint-disable-next-line styled-components-a11y/no-noninteractive-element-interactions
        <SearchBarWrapper
            onClick={searchBarOnClick}
            onBlur={searchBarOnBlur}
            isSearchBarToggled={isSearchBarToggled}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    // eslint-disable-next-line no-alert
                    alert('Search has not been implemented, yet!');
                } else if (e.key === 'Escape') {
                    setIsSearchBarToggled(false);
                }
            }}
            htmlFor="SearchBar__ID"
            aria-label="Begin typing to search for stores available on DoorDash."
        >
            {
                isSearchBarToggled ?
                    // Show back button
                    <BackArrow />
                    :
                    // Shows default search icon
                    <MagnifyingGlass />
            }
            <SearchBarInput
                id="SearchBar__ID"
                onFocus={searchBarOnClick}
                onBlur={searchBarOnBlur}
                placeholder="Search stores, dishes, products"
                type="text"
            />
        </SearchBarWrapper>
    );
}
