import React, { PureComponent } from 'react'
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import HomeRanking from './pages/HomeRanking'
import HomeRecommend from './pages/HomeRecommend'
// import HomeSongMenu from './pages/HomeSongMenu'
export class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <div className="header">
          <span>header</span>
          <Link to={'/home'}>首页</Link>
          <Link to={'/about'}>关于</Link>
          <Link to={'/login'}>登录</Link>
          <hr />
        </div>
        <div className="content">
          <span>body</span>
          <Routes>
            <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
            <Route path="/home" element={<Home></Home>}>
              <Route
                path="/home"
                element={<Navigate to="/home/recommend"></Navigate>}></Route>
              <Route
                path="/home/ranking"
                element={<HomeRanking></HomeRanking>}></Route>
              <Route
                path="/home/recommend"
                element={<HomeRecommend></HomeRecommend>}></Route>
              {/* <Route
                path="/home/songmenu"
                element={<HomeSongMenu></HomeSongMenu>}></Route> */}
            </Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </div>
        <div className="footer">
          <span>footer</span>

          <hr />
        </div>
      </div>
    )
  }
}

export default App
