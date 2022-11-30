
import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './Slice/CounterSlice'
import RegisterReducer from './Slice/RegisterSlice'
import LoginReducer from './Slice/LoginSlice'

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    register: RegisterReducer,
    login: LoginReducer
  },
})