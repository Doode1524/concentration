import React, { Component } from 'react'

class Timer extends Component {
  constructor (props) {
    super (props) 
    this.state = {
      seconds: 0
    }
  }

  componentDidMount () {
    this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1
      }))
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.myInterval)
  }

  render() {
    return (
      <div>
        <h3> Time used in Seconds: {this.state.seconds} </h3>
      </div>
    )
  }
}

export default Timer