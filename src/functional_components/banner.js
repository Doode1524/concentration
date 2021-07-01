import React from 'react' 
import NavBar from './nav';
import Home from './home';
import GamesContainer from '../class_components/gamesContainer';
import NewGame from '../class_components/newGame';

import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';

const Banner = () => {

  return(
    <div className='banner'>
      <Router>

        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/games" component={(routeInfo) => <GamesContainer routeData={routeInfo} />} />
        <Route exact path="/games/new">
          <NewGame />
          </Route> 
      </Router>
      
      <hr style={{color: "black"}}></hr>
    </div>
  )
}

export default Banner;
