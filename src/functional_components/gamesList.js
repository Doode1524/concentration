import React, { Component } from 'react'
import { connect } from 'react-redux'
import LikeButton from '../class_components/likeButton'
import GamesListH2 from './gamesListH2'

class GamesList extends Component {

  state = {
    games: []
  }

  clickHandler = () => {
    function compare(a,b) {
        const scoreA = a.score;
        const scoreB = b.score;

        let comparison = 0;
      if (scoreA > scoreB) {
        comparison = 1;
      } else if (scoreA < scoreB) {
        comparison = -1;
      }
      return comparison *-1;
    }

    this.setState({
      games: this.props.games.sort(compare)
    })


  }

  render () {
    return (
      <>
        <GamesListH2 />
        <button onClick={this.clickHandler}>Sort by Score</button>

        {this.state.games > 0 ?
        this.state.games.map((g) => {
          return <p key={g.id}>{g.initials} {g.score} of {`${g.numCards}`/2} points <LikeButton /></p> 
        }) 
        : this.props.games.map((g) => {
          return <p key={g.id}>{g.initials} {g.score} of {`${g.numCards}`/2} points <LikeButton /></p> 
        })}
      </>
    )
  }
}


export default connect((state) => {
  return {games: state.games}
}) (GamesList); 