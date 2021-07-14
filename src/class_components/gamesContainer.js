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
    // console.log("A")
    this.props.fetchGames()
    // console.log("B")
  }

  render() {
    // {console.log("test",this.props)}
    return (
      
      <>
        <Switch>
          <Route exact path="/games">
            <GamesList games={this.props.games}/>
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