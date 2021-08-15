import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGames } from '../redux/actions/fetchGames'
import Cards from './cards'
import Games from './gamesList'
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
          <Route path="/games/new" >
            <NewGame />
          </Route>          
          <Route exact path="/games/:id" component={(routeData) => {
              const id = parseInt(routeData.match.params.id)
              const game = this.props.games.find(g => g.id === id)
              return <Cards game={game} />
            }
          } />
        </Switch>
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