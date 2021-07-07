import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGames } from '../redux/actions/fetchGames'
import Games from '../functional_components/gamesList'
import NewGame from './newGame'

import {
  Route, Switch
} from 'react-router-dom';

class GamesContainer extends Component {

  componentDidMount(){
    this.props.fetchGames()
  }

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/games">
            <Games games={this.props.games}/>
          </Route> 
          <Route exact path="/games/new">
            <NewGame />
          </Route>          
        </Switch>
      </>
    )
  }
}

export default connect((state) => {
  return {games: state.games}
}, {fetchGames}) (GamesContainer); 