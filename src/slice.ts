import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  automation: false,
  product: false,
  mobile: false
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleAutomation: (state) => {
      state.automation = !state.automation;
    },

    toggleProduct: (state) => {
      state.product = !state.product;
    },

    toggleMobile: (state) => {
      state.mobile = !state.mobile
    }
  },
});

export const { toggleAutomation, toggleProduct, toggleMobile } = navbarSlice.actions;

export default navbarSlice.reducer;
