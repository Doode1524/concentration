import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGames } from '../redux/actions/fetchGames'
import GamesList from '../functional_components/gamesList'
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
          <Route path="/games/new" render={(routerProps) => <NewGame sendData={this.componentDidMount} {...routerProps} />} />         
          <Route exact path="/games">
            <GamesList games={this.props.games}/>
          </Route> 
        </Switch>
      </>
    )
  }
}

export default connect((state) => {
  return {games: state.games}
}, {fetchGames}) (GamesContainer); 