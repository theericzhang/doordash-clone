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
    ]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {

    }
})