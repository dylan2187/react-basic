import React, { PureComponent } from 'react'
import store from '../store/index'

export class Profile extends PureComponent {
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState()
      this.setState({ counter: state.counter })
    })
  }
  constructor() {
    super()
    this.state = {
      counter: store.getState().counter,
    }
  }
  render() {
    const { counter } = this.state
    return (
      <div>
        <h1>Profile</h1>
        <h2>当前计数：{counter}</h2>
      </div>
    )
  }
}

export default Profile
