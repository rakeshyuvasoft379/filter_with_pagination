import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    registerData: []
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        registerUser: (state, action) => {
            state.registerData.push(action.payload)
        }
    },
})

export const { registerUser } = registerSlice.actions

export default registerSlice.reducer
