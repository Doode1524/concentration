import React, { Component } from 'react'

export default class likeButton extends Component {


  state = {
    like: 0
  }

  onClickHandler = () => {
    this.setState({
      like: this.state.like + 1
    }) 
  }
  render() {
    return (
      <>
        <button onClick={this.onClickHandler}>{this.state.like}</button>
      </>
    )
  }
}
