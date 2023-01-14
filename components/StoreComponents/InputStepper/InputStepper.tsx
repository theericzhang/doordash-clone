import { useState } from "react";
import styled from "styled-components";

const InputStepper__wrapper = styled.div`
    display: flex;
    align-items: center;
`;

const InputStepper__button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
`;

const InputStepper__label = styled.span`
    
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
        } else {return}
    }

    return (
        <InputStepper__wrapper>
            <InputStepper__button 
                onClick={handleClickDecrement}
            />
            <InputStepper__label>
                {stepperCount}
            </InputStepper__label>
            <InputStepper__button 
                onClick={handleClickIncrement}
            />
        </InputStepper__wrapper>
    );
}