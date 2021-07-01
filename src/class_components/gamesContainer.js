import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGames } from '../redux/actions/fetchGames'
import Cards from './cards'
import Games from './gamesList'
import NewGame from './newGame'

import {
  BrowserRouter as Route, Switch
} from 'react-router-dom';

class GamesContainer extends Component {

  componentDidMount(){
    this.props.fetchGames()
  }

  render() {
    console.log(this.props)
    return (
      <>
        <Switch>
        
          <Route exact path="/games">
            <Games games={this.props.games}/>
          </Route> 
          <Route exact path="/games/:id" component={(routeData) => {
              console.log(routeData)
              return <Cards />
            }
          } />
        </Switch>
        <NewGame />
      </>
    )
  }
}

// const mapStateToProps = (state) => {
//   game = state.game
// }

export default connect((state) => {
  return {games: state.games}
}, {fetchGames}) (GamesContainer); 