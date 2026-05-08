import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrder = createAsyncThunk(
    "order/fetchOrder",
    async (userId, thunkAPI) => {
        try {
            const response = await axios.get(`https://69fb440288a7af0ecca8e008.mockapi.io/orders?search=${userId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue("Error receiving order", error);
        }
    }
)

const initialState = {
    order: [],
    isLoading: false,
    error: "",
};

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchOrder.fulfilled, (state, action) => {
                state.isLoading = false;
                state.order = action.payload;
            })
            .addCase(fetchOrder.rejected, (state, action) => {
                state.isLoading = false;
                state.order = action.payload;
            });
    },
});

export default orderSlice.reducer;
