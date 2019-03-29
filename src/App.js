import React, { Component } from 'react'
import './App.css'
import Users from './Users'
import UsersCount from './UsersCount'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UsersCount />
        <Users />
      </div>
    )
  }
}

export default App
