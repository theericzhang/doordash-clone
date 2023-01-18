import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "../app-redux/features/cart/cartSlice";
import deliveryReducers from "../app-redux/features/delivery/deliverySlice";

export const store = configureStore({
    reducer: {
        // Slice and reducer, slice: reducer
        cartSlice: cartReducers,
        deliverySlice: deliveryReducers,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;