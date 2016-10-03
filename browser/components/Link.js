import React, { Component } from 'react'

class Link extends Component {

  static PropTypes = {
    to:      React.PropTypes.string,
    href:    React.PropTypes.string,
    path:    React.PropTypes.string,
    onClick: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render(){
    const props = Object.assign({}, this.props)
    props.href = props.href || props.to || ''
    props.onClick = this.onClick
    return <a {...props}>{props.children}</a>
  }

}


export default Link
