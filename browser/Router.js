import React from 'react'
import SimpleReactRouter from 'simple-react-router'

// Pages
import NotFound from './components/NotFound'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import BoardShowPage from './components/BoardShowPage'

export default class Router extends SimpleReactRouter {
  getRoutes(map){
    map('/',                HomePage)
    map('/login',           LoginPage)
    map('/boards/:boardId', BoardShowPage)
    map('*',                NotFound)
  }
}
