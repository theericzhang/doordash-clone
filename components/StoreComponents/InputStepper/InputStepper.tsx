import { useState } from "react";
import styled from "styled-components";
import Minus from "../../Icons/MinusIcon";
import Plus from "../../Icons/PlusIcon";
import GarbageCan from "../../Icons/GarbageCanIcon";

const InputStepper__wrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--secondary-gray);
    border-radius: 17px;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 8px;
`;

const InputStepper__button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 500px;
    background-color: var(--primary-white);

    &:hover {
        cursor: pointer;
    }
`;

const InputStepper__label__wrapper = styled.div`
    display: flex;
    justify-content: center;
    min-width: 32px;
`;

const InputStepper__label = styled.span`
    font-weight: 500;
    font-size: 14px;
    color: var(--primary-black);
`;

export default function InputStepper() {
    
    const [stepperCount, setStepperCount] = useState(2);

    function handleClickIncrement() {
        setStepperCount(prevStepperCount => prevStepperCount + 1);
        return;
    }

    function handleClickDecrement() {
        if (stepperCount > 0) {
            setStepperCount(prevStepperCount => prevStepperCount - 1);
            // delete item and remove from list if stepperCount reaches 0.
            // think of passing an ID that react can remove from an array of cart items.
        } else {return}
    }

    return (
        <InputStepper__wrapper>
            <InputStepper__button 
                onClick={handleClickDecrement}
            >
                {stepperCount === 1 ?
                    <GarbageCan />
                :
                    <Minus />
                }
            </InputStepper__button>
            <InputStepper__label__wrapper>
                <InputStepper__label>
                    {stepperCount} ×
                </InputStepper__label>
            </InputStepper__label__wrapper>
            <InputStepper__button 
                onClick={handleClickIncrement}
            >
                <Plus />
            </InputStepper__button>
        </InputStepper__wrapper>
    );
}