import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        incrementCounter: (state) => {
            state.count++
        },
        decrementCounter: (state) => {
            state.count++
        },
        reset: (state) => {
            state.count = 0
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
        }
    }
})

export const { incrementCounter, decrementCounter, reset, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer