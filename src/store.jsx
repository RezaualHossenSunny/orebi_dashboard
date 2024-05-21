import { configureStore } from '@reduxjs/toolkit'
import  useSlice  from './slice/userSlice'

export const store = configureStore({
  reducer: {
    userInfo: useSlice
  },
})