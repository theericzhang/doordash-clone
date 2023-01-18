import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TStoreItem } from "../../../global";

interface IItemState {
    isOverlayOpen: boolean;
    itemData?: TStoreItem;
};

const initialState: IItemState = {
    isOverlayOpen: false,
};

const itemSlice = createSlice({
    name: "item",
    initialState: initialState,
    reducers: {
        toggleIsOverlayOpen: (state) => {
            state.isOverlayOpen = !state.isOverlayOpen;
        },

    }
});

export const { toggleIsOverlayOpen } = itemSlice.actions;
export default itemSlice.reducer;