import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

export class Home extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <h1>home</h1>
        <Link to="/home/recommend">推荐</Link>
        <Link to="/home/ranking">排行</Link>
        {/* <Link to="/home/songmenu">歌单</Link> */}
        {/* 占位组件 */}
        <Outlet></Outlet>
      </div>
    )
  }
}

export default Home
