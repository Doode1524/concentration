import React from 'react'
import { connect } from 'react-redux'
import GamesListH2 from './gamesListH2'
import {
  Link
} from 'react-router-dom';

const GamesList = (props) => {

  return (
    <>
      <GamesListH2 />
      {props.games.map((g) => {
        return <p key={g.id}><Link to={`/games/${g.id}`}>{g.initials} {g.score} of {`${g.numCards}`/2} points</Link></p>
      })}
    </>
  )
}

export default connect((state) => {
  return {games: state.games}
}) (GamesList); 