const { CHANGE_NAME } = require('./constants')

const changeNameAction = (name) => {
  return {
    type: CHANGE_NAME,
    payload: name,
  }
}
module.exports = {
  changeNameAction,
}
