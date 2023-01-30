/* eslint-disable react/jsx-no-bind */
import styled from 'styled-components';
import Minus from '../../Icons/MinusIcon';
import Plus from '../../Icons/PlusIcon';
import GarbageCan from '../../Icons/GarbageCanIcon';

// redux global state
import { useAppDispatch, useAppSelector } from '../../../app-redux/hooks';
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
    itemID: number;
};

export default function InputStepper({ itemID }: TInputStepper) {
    const stateCart = useAppSelector((state) => state.cartSlice.cart);
    let quantityCart = 0;

    stateCart.forEach((item) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        itemID === item.itemID ? quantityCart = item.quantity : null;
    });

    console.log('Amount of items: ', quantityCart);

    /**
     * TODO: Values need to be debounced before they are dispatched to global store.
     * REVISION: Values can be directly dispatched to global store. the reducer itself will take care of
     * debouncing since it will post to the server then.
     */

    const dispatch = useAppDispatch();

    function handleClickIncrement() {
        const cartPayload = {
            itemID,
            quantity: 1,
        };
        dispatch(addItemToCart(cartPayload));
    }

    function handleClickDecrement() {
        if (quantityCart > 1) {
            dispatch(deleteItemFromCart(itemID));
        } else if (quantityCart === 1) {
            // delete item and remove from list if stepperCount reaches 0.
            dispatch(deleteItemFromCart(itemID));
        }
    }

    return (
        <InputStepperWrapper>
            <InputStepperButton
                onClick={handleClickDecrement}
                aria-label="Subtract quantity"
            >
                {quantityCart === 1 ?
                    <GarbageCan />
                    :
                    <Minus />}
            </InputStepperButton>
            <InputStepperLabelWrapper>
                <InputStepperLabel>
                    {quantityCart}
                    {' '}
                    ×
                </InputStepperLabel>
            </InputStepperLabelWrapper>
            <InputStepperButton
                onClick={handleClickIncrement}
                aria-label="Add quantity"
            >
                <Plus />
            </InputStepperButton>
        </InputStepperWrapper>
    );
}
