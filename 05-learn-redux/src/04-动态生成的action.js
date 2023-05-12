const store = require('./store')
const { changeNameAction } = require('./store/actionCreators')

store.subscribe(() => {
  console.log('订阅数据变化:', store.getState())
})

// const changeNameAction = (name) => {
//   return {
//     type: 'change_name',
//     payload: name,
//   }
// }

store.dispatch(changeNameAction('wanghuahua'))
