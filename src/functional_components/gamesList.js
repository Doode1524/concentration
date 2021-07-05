import React from 'react'
import { connect } from 'react-redux'

const GamesList = (props) => {

  return (
    <>
      {props.games.map((g) => {
        return <p key={g.id}>{g.initials} {g.score} of {`${g.numCards}`/2} points</p>
      })}
    </>
  )
}

export default connect((state) => {
  return {games: state.games}
}) (GamesList); 