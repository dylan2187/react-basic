import React, { PureComponent } from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Home></Home>
        <Profile></Profile>
      </div>
    )
  }
}

export default App
