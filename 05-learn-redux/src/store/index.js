const { createStore } = require('redux')

const initialState = {
  name: 'dylan',
  age: 25,
}

// 定义reducer函数

function reducer(state, action) {
  console.log('state:', state)
  console.log('action:', action)
  return initialState
}

const store = createStore(reducer)

module.exports = store
