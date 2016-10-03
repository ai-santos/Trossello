import React from 'react'
import SimpleReactRouter from 'SimpleReactRouter'

// Pages
import NotFound from './components/NotFound'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import BoardsIndexPage from './components/BoardsIndexPage'
import BoardShowPage from './components/BoardShowPage'


const SamplePage = (props) => {
  return <div>
    <pre>{JSON.stringify(props, null, 4)}</pre>
    <div><a href="/">Home</a></div>
    <div><a href="/login">Login</a></div>
    <div><a href="/boards/1?sort=desc">Board 1</a></div>
    <div><a href="/boards/2?sort=asc">Board 2</a></div>
    <div><a href="/dsadsadsadas/asd/asd/asd">Not Found</a></div>
  </div>
}


export default class Router extends SimpleReactRouter {

  getRoutes(map){
    map('/',                SamplePage)
    map('/login',           SamplePage)
    map('/boards/:boardId', SamplePage)
    map('*',                SamplePage)
  }
}
