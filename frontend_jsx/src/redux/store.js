import { configureStore } from '@reduxjs/toolkit'
import nasaReducer from './nasaSlice'
import coursesReducer from './coursesSlice'

export const store = configureStore({
  reducer: {
    nasa: nasaReducer,
    courses: coursesReducer
  }
})
