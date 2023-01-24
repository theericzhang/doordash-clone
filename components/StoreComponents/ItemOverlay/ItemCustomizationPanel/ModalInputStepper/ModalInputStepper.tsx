import styled from "styled-components";
import React, { useState } from "react";
import MinusCircle from "../../../../Icons/MinusCircleIcon";
import PlusCircle from "../../../../Icons/PlusCircleIcon";

const ModalInputStepper__wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: fit-content;
    column-gap: 16px;
    
    @media screen and (max-width: 480px) {
        column-gap: 9px;
    }
`;

const ModalInputStepper__button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: 10px;

    &:hover {
        cursor: pointer;
    }
`;

const ModalInputStepper__input = styled.input`
    height: 100%;
    width: 64px;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    background-color: var(--secondary-gray);
    color: var(--primary-black);
    border-radius: 7px;
    border: none;

    &:focus {
        outline-color: var(--primary-black);
    }

    &::placeholder {
        font-size: 16px;
        text-align: center;
        color: var(--primary-black);
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

type TModalInputStepper = {
    itemCounter: number;
    setItemCounter: React.Dispatch<React.SetStateAction<number>>;
}

export default function ModalInputStepper({ itemCounter, setItemCounter }: TModalInputStepper) {
    function incrementCounter() {
        setItemCounter(prevItemCounter => prevItemCounter + 1);
    }

    function decrementCounter() {
        if (itemCounter > 1) {
            setItemCounter(prevItemCounter => prevItemCounter - 1);
        }
    };

    // this is pretty important. Without this, the text cursor will be placed anywhere along existing text, but you can't delete it.
    // by selecting the entire field on click, we can ensure that the input will be properly reset.
    function setInputFocus() {
        (document.getElementById("ModalInputStepperInput") as HTMLInputElement).select();
    }

    return (
        <ModalInputStepper__wrapper>
            <ModalInputStepper__button onClick={decrementCounter}>
                <MinusCircle isEnabled={itemCounter > 1} />
            </ModalInputStepper__button>
            <ModalInputStepper__input
                placeholder={"1"}
                value={itemCounter}
                type={"number"}
                onChange={(e) => {
                    setItemCounter(Number(e.target.value));
                }}
                id="ModalInputStepperInput"
                onFocus={setInputFocus}
            />
            <ModalInputStepper__button onClick={incrementCounter}>
                <PlusCircle isEnabled={true}/>
            </ModalInputStepper__button>
        </ModalInputStepper__wrapper>
    );
}