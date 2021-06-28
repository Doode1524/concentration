import React,{ Component } from 'react' 

class Clock extends Component {

  state = {
    time: new Date().toLocaleString('en-US', { timeZone: 'CST' })
  }
  
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: new Date().toLocaleString('en-US', { timeZone: 'CST' })
      })
    },1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render () {
    return(
      <h2>CST: {this.state.time}</h2>
    )
  }
}

export default Clock;
