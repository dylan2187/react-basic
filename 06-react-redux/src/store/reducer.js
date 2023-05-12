import { CHANGE_COUNTER, GET_BANNERS, GET_RECOMMENDS } from './constants'

const initialState = {
  counter: 0,
  banners: [],
  recommends: [],
}

function reducer(state = initialState, action) {
  console.log('state:', state, 'action:', action)
  switch (action.type) {
    case CHANGE_COUNTER:
      return { ...state, counter: state.counter + action.payload }

    case GET_BANNERS:
      return { ...state, banners: action.payload }
    case GET_RECOMMENDS:
      return { ...state, recommends: action.payload }
    default:
      return state
  }
}

export default reducer
