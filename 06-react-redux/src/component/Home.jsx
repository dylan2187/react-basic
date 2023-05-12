import React, { PureComponent } from 'react'
import store from '../store/index'
import { changeCounterAction } from '../store/actionCreators'
export class Home extends PureComponent {
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState()
      this.setState({ counter: state.counter })
    })
  }
  constructor() {
    super()
    this.state = {
      counter: 0,
    }
  }
  handleCounterChange(num) {
    console.log(changeCounterAction(num))
    store.dispatch(changeCounterAction(num))
  }
  render() {
    const { counter } = this.state
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数: {counter}</h2>
        <button onClick={() => this.handleCounterChange(1)}>+1</button>
        <button onClick={() => this.handleCounterChange(5)}>+5</button>
        <button onClick={() => this.handleCounterChange(-2)}>-2</button>
      </div>
    )
  }
}

export default Home
