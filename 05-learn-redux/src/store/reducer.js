const { CHANGE_NAME } = require('./constants')

const initialState = {
  name: 'dylan',
  age: 25,
}

// 定义reducer函数

function reducer(state = initialState, action) {
  // console.log('state:', state)
  // console.log('action:', action)
  if (action.type === CHANGE_NAME) {
    return { ...state, name: action.payload }
  }
  return state
}

module.exports = reducer
