import Home from '../pages/Home'
// import About from '../pages/About'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import HomeRanking from '../pages/HomeRanking'
import HomeRecommend from '../pages/HomeRecommend'
import Category from '../pages/Category'
import Order from '../pages/Order'
import { Navigate } from 'react-router-dom'
import React from 'react'
const About = React.lazy(() => import('../pages/About'))
const routes = [
  {
    path: '/',
    element: <Navigate to="/home"> </Navigate>,
  },
  {
    path: '/home',
    element: <Home></Home>,
    children: [
      {
        path: '/home',
        element: <Navigate to="/home/recommend"></Navigate>,
      },
      {
        path: '/home/recommend',
        element: <HomeRecommend></HomeRecommend>,
      },
      {
        path: '/home/ranking',
        element: <HomeRanking></HomeRanking>,
      },
    ],
  },
  {
    path: '/about',
    element: <About></About>,
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/category',
    element: <Category></Category>,
  },
  {
    path: '/order',
    element: <Order></Order>,
  },
  {
    path: '*',
    element: <NotFound></NotFound>,
  },
]
export default routes
