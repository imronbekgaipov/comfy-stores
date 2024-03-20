import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { singleData } from "../../interface/allinterface";

interface initialState {
  selectData: singleData[];
  subtotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
}

const storedCartData = localStorage.getItem("cart");
const initialState: initialState = storedCartData
  ? JSON.parse(storedCartData)
  : {
      selectData: [] as singleData[],
      subtotal: 0,
      shipping: 5,
      tax: 0,
      orderTotal: 0,
    };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setSelectData: (state, { payload }: PayloadAction<singleData>) => {
      const index = state.selectData.findIndex(
        (data) => data.data.data.id === payload.data.data.id
      );

      if (index !== -1) {
        state.selectData[index] = payload;
      } else {
        state.selectData.push(payload);
      }

      cartSlice.caseReducers.mathData(state);
    },

    mathData: (state) => {
      state.subtotal = state.selectData.reduce(
        (total, data) =>
          total +
          (data?.amount ?? 1) *
            Number(data?.data?.data?.attributes?.price ?? 0),
        0
      );
      state.tax = state.selectData.reduce(
        (tax, data) => tax + (data?.amount ?? 1) * state.shipping,
        0
      );
      state.orderTotal = state.subtotal + state.tax;

      localStorage.setItem("cart", JSON.stringify(state));
    },

    delSelectData: (state, { payload }) => {
      state.selectData = state.selectData.filter(
        (data) => data.data.data.id !== payload
      );
      cartSlice.caseReducers.mathData(state);
    },
  },
});

export default cartSlice.reducer;
export const { setSelectData, delSelectData } = cartSlice.actions;
