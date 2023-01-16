import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "../app-redux/features/cart/cartSlice"

export const store = configureStore({
    reducer: {
        // Slice and reducer, slice: reducer
        cart: cartReducers
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;