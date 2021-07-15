import React, { Component } from 'react'
import { connect } from 'react-redux'
import LikeButton from '../class_components/likeButton'
import GamesListH2 from './gamesListH2'

class GamesList extends Component {


  render () {
    return (
      <>
        <GamesListH2 />
        {this.props.games.map((g) => {
          return <p key={g.id}>{g.initials} {g.score} of {`${g.numCards}`/2} points <LikeButton /></p> 
        })}
      </>
    )
  }
}


export default connect((state) => {
  return {games: state.games}
}) (GamesList); 