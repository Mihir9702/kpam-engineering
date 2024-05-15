import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mobile: false,
  desktop: false,
  automation: false,
  product: false
}

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    toggleMobile: (state) => {
      state.mobile = !state.mobile
    },

    toggleDesktop: (state) => {
      state.desktop = !state.desktop
    },

    toggleAutomation: (state) => {
      state.automation = !state.automation
    },

    toggleProduct: (state) => {
      state.product = !state.product
    },
  }
})

export const { toggleMobile, toggleDesktop, toggleAutomation, toggleProduct } = navbarSlice.actions

export default navbarSlice.reducer