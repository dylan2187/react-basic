const store = require('./store')

const changeNameAction = { type: 'change_name', payload: 'wangkai' }
store.dispatch(changeNameAction)

console.log(store.getState())
