
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SetGames } from '../redux/actions/setGames'

class GamesList extends Component {

  componentDidMount(){
    this.props.SetGames()
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
}, {SetGames})(GamesList)