import React from 'react' 
import NavBar from './nav';
import Home from './home';
import GamesList from '../class_components/gamesList';
import NewGame from '../class_components/newGame';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const Banner = () => {

  return(
    <div className='banner'>

      <Router>

        <NavBar />

        <Route exact path="/" component={Home} />

        <Route path="/newGame" component={NewGame} />

        <Route path="/games" render={() => <GamesList />} />

        {/* <Route exact path="/games/:id" render={routerProps => <GameView games={games} {...routerProps} />} /> */}

      </Router>
      
      <hr style={{color: "black"}}></hr>
    </div>
  )
}

export default Banner;
