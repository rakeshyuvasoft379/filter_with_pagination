import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginData: []
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            localStorage.setItem("user", action.payload)
            //   state.loginData.push(action.payload)
        }
    },
})

export const { loginUser } = loginSlice.actions

export default loginSlice.reducer
