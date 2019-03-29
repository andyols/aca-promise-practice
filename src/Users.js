import React, { Component, Fragment } from 'react'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'

class Users extends Component {
  getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.props.setUsers(users))
  }

  render() {
    const users = this.props.users.map(user => (
      <div key={user.id} className="column" style={{ marginTop: '2rem' }}>
        <div className="ui cards">
          <div className="card">
            <div className="content">
              <div className="header">{user.name}</div>
              <div className="meta">{user.username}</div>
              <div className="meta">{user.email}</div>
              <div className="meta">
                <a href="/">{user.website}</a>
              </div>
            </div>
            <div className="ui bottom attached button">
              <i className="add icon" />
              Add Friend
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
        <div className="ui container">
          <div className="ui centered grid">
            <div className="five column row">{users}</div>
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  setUsers: users => dispatch({ type: 'SET_USERS', value: users })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
