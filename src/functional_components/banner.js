import React from 'react' 
import NavBar from './nav';
import Home from './home';
import GamesContainer from '../class_components/gamesContainer';

import Grid from '@material-ui/core/Grid';

import {
  Route
} from 'react-router-dom';

const Banner = () => {

  return(
    <Grid className='banner'>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/games" component={(routeInfo) => <GamesContainer routeData={routeInfo} />} />
      <hr style={{color: "black"}}></hr>
    </Grid>
  )
}

export default Banner;
