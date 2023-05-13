import { createSlice } from '@reduxjs/toolkit'

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    banners: [],
    recommends: [],
  },
  reducers: {},
})

export default homeSlice.reducers
