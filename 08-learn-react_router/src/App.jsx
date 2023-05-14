import React, { PureComponent } from 'react'
import {
  Link,
  Navigate,
  Route,
  Routes,
  useNavigate,
  useRoutes,
} from 'react-router-dom'

// import Home from './pages/Home'
// import About from './pages/About'
// import Login from './pages/Login'
// import NotFound from './pages/NotFound'
// import HomeRanking from './pages/HomeRanking'
// import HomeRecommend from './pages/HomeRecommend'
// import Category from './pages/Category'
// import Order from './pages/Order'
import routes from './router'
// import HomeSongMenu from './pages/HomeSongMenu'
export function App(props) {
  const navigate = useNavigate()

  function navigateTo(path) {
    navigate(path)
  }
  return (
    <div className="app">
      <div className="header">
        <span>header</span>
        <Link to={'/home'}>首页</Link>
        <Link to={'/about'}>关于</Link>
        <Link to={'/login'}>登录</Link>
        <button onClick={(e) => navigateTo('/category')}>分类</button>
        <span onClick={(e) => navigateTo('/order')}>订单</span>
        <hr />
      </div>
      <div className="content">
        <span>body</span>
        {/* <Routes>
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
          </Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/category" element={<Category></Category>}></Route>
          <Route path="/order" element={<Order></Order>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes> */}
        {useRoutes(routes)}
      </div>
      <div className="footer">
        <hr />
        <span>footer</span>
      </div>
    </div>
  )
}

export default App
