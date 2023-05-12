const store = require('./store')

store.subscribe(() => {
  console.log('订阅数据变化:', store.getState())
})

const changeNameAction = { type: 'change_name', payload: 'wangkai' }
store.dispatch(changeNameAction)
