import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListOfGames from './listOfGames'
import LikeButton from '../class_components/likeButton'

class GamesList extends Component {


  render () {
    return (
      <>
        <ListOfGames />
        {this.props.games.map((g) => {
          {/* console.log(g) */}
          return <p key={g.id}>{g.initials} {g.score} of {`${g.numCards}`/2} points <LikeButton /></p> 
        })}
      </>
    )
  }
}


export default connect((state) => {
  return {games: state.games}
}) (GamesList); 