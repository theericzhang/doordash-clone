import styled from "styled-components";
import { useState } from "react";
import MinusCircle from "../../../../Icons/MinusCircleIcon";
import PlusCircle from "../../../../Icons/PlusCircleIcon";

const ModalInputStepper__wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: fit-content;
`;

const ModalInputStepper__button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
`;

const ModalInputStepper__input = styled.input`
    
`;

export default function ModalInputStepper() {
    const [itemCounter, setItemCounter] = useState(1);
    
    function incrementCounter() {
        setItemCounter(prevItemCounter => prevItemCounter + 1);
    }

    function decrementCounter() {
        if (itemCounter > 1) {
            setItemCounter(prevItemCounter => prevItemCounter - 1);
        }
    };

    return (
        <ModalInputStepper__wrapper>
            <ModalInputStepper__button onClick={decrementCounter}>
                <MinusCircle isEnabled={itemCounter > 1} />
            </ModalInputStepper__button>
            <ModalInputStepper__input
                placeholder={itemCounter.toString()}
            />
            <ModalInputStepper__button onClick={incrementCounter}>
                <PlusCircle isEnabled={true}/>
            </ModalInputStepper__button>
        </ModalInputStepper__wrapper>
    );
}