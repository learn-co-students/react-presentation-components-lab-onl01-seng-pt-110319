import React, { Component } from 'react'

class SimpleComponent extends Component {
  state = {
    mood: "happy"
  }

  handleClick = () => {
    this.setState(previousState => {
      return {
        mood: "sad"
      }
    })
  }

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>
  }
}

export default SimpleComponent
