import { configureStore } from "@reduxjs/toolkit";
// import your reducer here from features

export const store = configureStore({
    reducer: {
        // Slice and reducer, slice: reducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;