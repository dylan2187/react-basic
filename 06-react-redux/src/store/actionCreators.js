import { CHANGE_COUNTER, GET_BANNERS, GET_RECOMMENDS } from './constants'
import axios from 'axios'

export const changeCounterAction = (cnt) => ({
  type: CHANGE_COUNTER,
  payload: cnt,
})
export const getBannersAction = (banners) => ({
  type: GET_BANNERS,
  payload: banners,
})
export const getRecommendsAction = (recommends) => ({
  type: GET_RECOMMENDS,
  payload: recommends,
})

export const fetchHomeMultidataAction = () => {
  //这个函数会被立即执行
  return function (dispatch, getState) {
    console.log('foo function execution----')
    axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list
      dispatch({ type: GET_BANNERS, payload: banners })
      dispatch({ type: GET_RECOMMENDS, payload: recommends })
    })
  }
}

export default changeCounterAction
