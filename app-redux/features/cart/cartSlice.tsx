import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICartState {
    storeID: number | null;
    cart: {
        itemID: number;
        quantity: number;
    }[];
}

const initialState: ICartState = {
    storeID: 1243431,
    cart: [
        {
            itemID: 123,
            quantity: 2,
        },
        {
            itemID: 125,
            quantity: 3,
        },
    ],
};

// cartSlice needs access to the storeID to ensure that all items in the cart are from storeID.
// Without storeID validation, the cart could contain items from multiple stores, which is disallowed in standard DD delivery (with exception of having dasher pick up items after a delivery has been dispatched)
const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        // if the user adds an item from a different store, we need to reset the storeID and cart to the storeID of the new item they were looking at
        resetCartNewStore: (state, action: PayloadAction<number>) => {
            state.storeID = action.payload;
            state.cart = [];
        },

        // the user adds an item, passing the itemID
        addItemToCart: (state, action: PayloadAction<number>) => {
            // loop through cart items to see if the itemID (action.payload) exists.
            // if it exists, then just increment the quantity.
            // if it does not exist, then add the new item to a copy of the existing cart state.

            let itemExists = false;

            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].itemID === action.payload) {
                    state.cart[i].quantity += 1;
                    itemExists = true;
                    break;
                }
            }

            if (!itemExists) {
                state.cart = [
                    ...state.cart,
                    {
                        itemID: action.payload,
                        quantity: 1,
                    },
                ];
            }
        },

        // the user deletes an item from the cart
        // deleteItemFromCart: (state, action: PayloadAction<number>) => {
        //     state.cart = state.cart.filter(item => item.itemID !== action.payload);
        // },

        // reduces the quantity of an item in a cart if quantity > 0
        // if quantity is 1 and user hits delete, item should be removed from list
        deleteItemFromCart: (state, action: PayloadAction<number>) => {
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].itemID === action.payload && state.cart[i].quantity > 1) {
                    state.cart[i].quantity -= 1;
                    break;
                } else if (state.cart[i].itemID === action.payload && state.cart[i].quantity === 1) {
                    // if state.cart[i].quantity is 1, then filter out that item altogether.
                    state.cart = state.cart.filter(item => item.itemID !== action.payload);
                    break;
                }
            }
        },
    },
});

export const {resetCartNewStore, addItemToCart, deleteItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;