import React, { Component } from 'react'

class User extends Component { 
  render() {
    return (
      <div>
        <h1>Welcome {this.props.name()}</h1>
        <h4>{this.props.render(true)}</h4>
      </div>
    )
  }
}

export default User