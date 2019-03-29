import React, { Component, Fragment } from 'react'
import { Button } from '@material-ui/core'

class Users extends Component {
  state = {
    users: []
  }

  getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users }))
  }

  render() {
    const users = this.state.users.map(user => (
      <div key={user.id} className="col">
        <div className="ui cards">
          <div className="card">
            <div className="content">
              <div className="header">{user.name}</div>
              <div className="meta">{user.username}</div>
              <div className="meta">{user.email}</div>
              <div className="meta">{user.website}</div>
            </div>
          </div>
        </div>
      </div>
    ))
    return (
      <Fragment>
        <div>
          <h3>Press the button to get users and display them below</h3>
          <Button onClick={this.getUsers} variant="contained" color="primary">
            Get Users
          </Button>
        </div>
        <div className="ui container" style={{ marginTop: '20px' }}>
          <div className="ui three column centered grid">
            <div className="row">{users}</div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Users
