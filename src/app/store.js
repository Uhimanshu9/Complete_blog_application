import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../featurs/authSlice' // adjust the path if needed


export const store = configureStore({
  reducer: {
     auth: authReducer,
  },
})