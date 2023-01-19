import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TStoreItem } from "../../../global";

interface IItemState {
    isModalOpen: boolean;
    itemData: TStoreItem;
};

const initialState: IItemState = {
    isModalOpen: false,
    itemData: {} as TStoreItem,
};

const itemSlice = createSlice({
    name: "item",
    initialState: initialState,
    reducers: {
        toggleIsModalOpen: (state) => {
            state.isModalOpen = !state.isModalOpen;
        },
        setModalData: (state, action: PayloadAction<TStoreItem>) => {
            state.itemData = action.payload;
        }
    }
});

export const { toggleIsModalOpen, setModalData } = itemSlice.actions;
export default itemSlice.reducer;