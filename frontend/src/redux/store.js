import { configureStore } from '@reduxjs/toolkit'
import nasaReducer from './nasaSlice'

export const store = configureStore({
  reducer: {
    nasa: nasaReducer
  }
})
