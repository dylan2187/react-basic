import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
  },
  reducers: {
    addNumber(state, { payload }) {
      state.counter = state.counter + payload
    },
    multipleNumber(state, { payload }) {
      state.counter *= payload
    },
  },
})

export const { addNumber, multipleNumber } = counterSlice.actions

export default counterSlice.reducer
