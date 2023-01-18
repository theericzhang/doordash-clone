import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TStoreItem } from "../../../global";

interface IItemState {
    isModalOpen: boolean;
    itemData?: TStoreItem;
};

const initialState: IItemState = {
    isModalOpen: false,
};

const itemSlice = createSlice({
    name: "item",
    initialState: initialState,
    reducers: {
        toggleIsModalOpen: (state) => {
            state.isModalOpen = !state.isModalOpen;
        },
        // TODO: add reducer to set itemData when an item is clicked
    }
});

export const { toggleIsModalOpen } = itemSlice.actions;
export default itemSlice.reducer;