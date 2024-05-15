import { configureStore } from "@reduxjs/toolkit"
import navbarReducer from './slice'

export const store = configureStore({
  reducer: {
    navbar: navbarReducer
  }
})