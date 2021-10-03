import {configureStore} from '@reduxjs/toolkit'
import MemorySlice from './MemorySlice/MemorySlice'
export const store = configureStore({
  reducer:{
    memory:MemorySlice
  }
})
