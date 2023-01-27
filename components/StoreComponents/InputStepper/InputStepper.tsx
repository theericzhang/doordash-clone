/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
import styled from 'styled-components';
import Minus from '../../Icons/MinusIcon';
import Plus from '../../Icons/PlusIcon';
import GarbageCan from '../../Icons/GarbageCanIcon';

// redux global state
import { useAppDispatch } from '../../../app-redux/hooks';
import { addItemToCart, deleteItemFromCart } from '../../../app-redux/features/cart/cartSlice';

const InputStepperWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--secondary-gray);
    border-radius: 17px;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 8px;
    margin-left: auto;
`;

const InputStepperButton = styled.button`
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

const InputStepperLabelWrapper = styled.div`
    display: flex;
    justify-content: center;
    min-width: 32px;
`;

const InputStepperLabel = styled.span`
    font-weight: 500;
    font-size: 14px;
    color: var(--primary-black);
`;

type TInputStepper = {
    quantity: number;
    itemID: number;
};

export default function InputStepper({ quantity, itemID }: TInputStepper) {
    const [stepperCount, setStepperCount] = useState(quantity);

    /**
     * TODO: Values need to be debounced before they are dispatched to global store.
     */

    const dispatch = useAppDispatch();

    function handleClickIncrement() {
        const cartPayload = {
            itemID,
            quantity: 1,
        };
        setStepperCount((prevStepperCount) => prevStepperCount + 1);
        dispatch(addItemToCart(cartPayload));
    }

    function handleClickDecrement() {
        if (stepperCount > 1) {
            setStepperCount((prevStepperCount) => prevStepperCount - 1);
            dispatch(deleteItemFromCart(itemID));
        } else if (stepperCount === 1) {
            // delete item and remove from list if stepperCount reaches 0.
            // think of passing an ID that react can remove from an array of cart items.
            dispatch(deleteItemFromCart(itemID));
        }
    }

    return (
        <InputStepperWrapper>
            <InputStepperButton
                onClick={handleClickDecrement}
            >
                {stepperCount === 1 ?
                    <GarbageCan />
                    :
                    <Minus />}
            </InputStepperButton>
            <InputStepperLabelWrapper>
                <InputStepperLabel>
                    {stepperCount}
                    {' '}
                    ×
                </InputStepperLabel>
            </InputStepperLabelWrapper>
            <InputStepperButton
                onClick={handleClickIncrement}
            >
                <Plus />
            </InputStepperButton>
        </InputStepperWrapper>
    );
}
