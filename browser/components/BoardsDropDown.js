import $ from 'jquery'
import React, { Component } from 'react'
// import './Navbar.sass'
// import PresentationalComponent from './PresentationalComponent'
// import Link from './Link'
// import Icon from './Icon'
// import LogoutButton from './LogoutButton'
// import LoginButton from './LoginButton'
// import BoardsDropDown from './BoardsDropDown'

const BoardsDropDown = (props) => {
  if (props.loading) {
    const boards = <div>loading...</div>
  }else{
    const boards = props.boards.map(board => {
      return <li>{board.name}</li>
    })
  }
  return <div>
    <h1>Boards Dropdown</h1>
    <ol>
      {boards}
    </ol>
  </div>
}


class BoardsDataProvider extends Component {

  // initialize
  constructor(props){
    super(props)
    this.state = {
      boards: null
      loading: true,
      error: error,
    }
  }

  componentWillMount(){
    $.getJSON('/api/boards')
      .then(boards => {
        this.setState({
          boards: boards,
          loading: false,
        })
      })
      .catch(error => {
        this.setState({
          error: error,
          loading: false,
        })
      })
  }

  render(){
    const props = Object.assign({}, this.props)
    props.boards = this.state.boards
    props.loading = this.state.loading
    return <BoardsDropDown {...props}>{this.props.children}</BoardsDropDown>
  }
}

export default BoardsDataProvider
