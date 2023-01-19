import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "../app-redux/features/cart/cartSlice";
import deliveryReducers from "../app-redux/features/delivery/deliverySlice";
import itemReducers from "../app-redux/features/item/itemSlice";

export const store = configureStore({
    reducer: {
        // Slice and reducer, slice: reducer
        cartSlice: cartReducers,
        deliverySlice: deliveryReducers,
        itemSlice: itemReducers,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;