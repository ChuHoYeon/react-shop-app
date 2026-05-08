import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { IOrder } from "./order.type";

export const fetchOrder = createAsyncThunk(
  "order/fetchOrder",
  async (userId: string, thunkAPI) => {
    try {
      const response = await axios.get<IOrder[]>(
        `https://69fb440288a7af0ecca8e008.mockapi.io/orders?search=${userId}`,
      );
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue("Error receiving order");
    }
  },
);

type OrderState = {
  order: IOrder[];
  isLoading: boolean;
  error: string;
};

const initialState: OrderState = {
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
        state.error = action.payload as string;
      });
  },
});

export default orderSlice.reducer;
