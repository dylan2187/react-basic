import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchHomeMultidataAction = createAsyncThunk(
  'fetch/homemultidata',
  async function () {
    const res = await axios.get('http://123.207.32.32:8000/home/multidata')
    return res.data
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    banners: [],
    recommends: [],
  },
  reducers: {
    changeBanners(state, { payload }) {},
  },
  extraReducers: {
    // [fetchHomeMultidataAction.pending](state, action) {
    //   console.log('fetchHomeMultidataAction, pending')
    // },
    [fetchHomeMultidataAction.fulfilled](state, { payload }) {
      console.log('fetchHomeMultidataAction fulfilled', payload)
      state.banners = payload.data.banner.list
      state.recommends = payload.data.recommend.list
    },
    // [fetchHomeMultidataAction.rejected](state, action) {
    //   console.log('fetchHomeMultidataAction, rejected')
    // },
  },
})

export default homeSlice.reducer
