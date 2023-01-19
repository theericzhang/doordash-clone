import styled from "styled-components";
import { useState } from "react";
import MinusCircle from "../../../../Icons/MinusCircleIcon";
import PlusCircle from "../../../../Icons/PlusCircleIcon";

const ModalInputStepper__wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: fit-content;
    column-gap: 26px;
`;

const ModalInputStepper__button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
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

export default function ModalInputStepper() {
    const [itemCounter, setItemCounter] = useState(1);
    console.log(itemCounter);
    function incrementCounter() {
        setItemCounter(prevItemCounter => prevItemCounter + 1);
    }

    function decrementCounter() {
        if (itemCounter > 1) {
            setItemCounter(prevItemCounter => prevItemCounter - 1);
        }
    };

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