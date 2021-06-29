
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setGames } from '../actions/setGames'

class GamesList extends Component {

  componentDidMount(){
    this.props.setGames()
  }
  
  render() {
//render games data based on redux state

    return (
      <div>
        {this.props.games.map((g) => {
          return <p key={g.id}>{g.initials} {g.score} of {`${g.numCards}`/2} points</p>
        })}
      </div>
    )
  }
}

export default connect((state) => {
  return {games: state.games}
}, {setGames})(GamesList)