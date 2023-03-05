import { createSlice } from '@reduxjs/toolkit';

interface IDeliveryState {
    isDelivery: boolean;
}

const initialState: IDeliveryState = {
    isDelivery: true,
};

const deliverySlice = createSlice({
    name: 'delivery',
    initialState,
    reducers: {
        toggleDeliveryState: (state) => {
            state.isDelivery = !state.isDelivery;
        }
    }
});

export const { toggleDeliveryState } = deliverySlice.actions;
export default deliverySlice.reducer;
