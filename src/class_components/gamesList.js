import React from 'react'
import { connect } from 'react-redux'
import ListOfGames from '../functional_components/listOfGames'

const GamesList = (props) => {

  return (
    <>
      <ListOfGames />
      {props.games.map((g) => {
        return <p key={g.id}>{g.initials} {g.score} of {`${g.numCards}`/2} points</p>
      })}
    </>
  )
}

export default connect((state) => {
  return {games: state.games}
}) (GamesList); 