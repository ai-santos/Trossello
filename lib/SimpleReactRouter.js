import React, { Component } from 'react'
import querystring from 'querystring'

export default class SimpleReactRouter extends Component {
  constructor(props){
    super()
    this.popstate = this.popstate.bind(this)
    this.redirectTo = this.redirectTo.bind(this)
    this.update()
  }

  update() {
    this.location = {
      pathname: location.pathname,
      search: location.search,
      query: searchToObject(location.search),
      hash: location.hash,
    }
    this.route = this.router(this.location)
  }

  router(location){
    const routes = new Routes
    this.getRoutes(routes.map)
    return routes.resolve(location)
  }

  getRoutes(map){
    map('*', (props) =>
      <div>
        <h1>you must define getRoutes() in your subclass of SimpleReactRouter</h1>
        <pre>{JSON.stringify(props, null, 4)}</pre>
      </div>
    )
  }

  componentDidMount(){
    // bind to push state event
    addEventListener('popstate', this.popstate)
  }

  componentWillUnmount(){
    removeEventListener('popstate', this.popstate)
  }

  popstate(event){
    this.update()
  }

  static childContextTypes = {
    route: React.PropTypes.object,
    redirectTo: React.PropTypes.func,
  }

  getChildContext(){
    return {
      route: this.route,
      redirectTo: this.redirectTo,
    }
  }

  redirectTo(path, query){

  }

  render(){
    const { Component, props } = this.route
    return <Component {...props} />
  }
}

export class Routes {
  constructor(){
    this.routes = []
    this.map = this.map.bind(this)
  }

  map(pathExpression, Component){
    this.routes.push({ pathExpression, Component })
    return this
  }

  resolve(location){
    let resolvedRoute
    this.routes.find(route => {
      const {paramNames, regexp} = parsePathExpression(route.pathExpression)
      const parts = location.pathname.match(regexp)
      if (!parts) return false
      resolvedRoute = {
        Component: route.Component,
        pathExpression: route.pathExpression,
        parts: parts,
        props: {
          location: location,
          params: {},
        }
      }
      return true
    })
    return resolvedRoute
  }
}


const escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g
const namedParams  = /\/?(:|\*)([^\/?]+)/g
const parsePathExpression = (expression) => {
  let paramNames = [];
  expression = expression.replace(escapeRegExp, '\\$&')
  expression = expression.replace(namedParams, (_, type, paramName) => {
    paramNames.push(paramName)
    if (type === ':') return '/([^/?]+)';
    if (type === '*') return '/(.*?)';
  })
  let regexp = new RegExp('^'+expression+'$');
  return {
    paramNames: paramNames,
    regexp: regexp,
  }
}


const searchToObject = (search) => {
  return querystring.parse((search || '').replace(/^\?/, ''))
}


// const objectToSearch = (params) => {
//   var search = objectToQueryString(params);
//   return search.length === 0 ? '' : '?'+search;
// }

// const objectToQueryString = (params) => {
//   if (!params) return;
//   let pairs = []
//   Object.keys(params).forEach( key => {
//     let value = params[key]
//     if (value === true){
//       return pairs.push(encodeURIComponent(key));
//     }
//     if (value === false || value === null || value === undefined){
//       return;
//     }
//     pairs.push(encodeURIComponent(key)+'='+encodeURIComponent(value));
//   });
//   return pairs.join('&');
// }
