import React,{ Component } from 'react' 

class Clock extends Component {

  state = {
    time: new Date().toLocaleString('en-US', { timeZone: 'CST' }),
    timer: 0
  }
  
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: new Date().toLocaleString('en-US', { timeZone: 'CST' })
       // timer: something here like minutes:seconds?
      })
    },1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render () {
    return(
      <h2>CST: {this.state.time}</h2>
      //<h3>TIMER: {this.state.timer}</h3>
    )
  }
}

export default Clock;

