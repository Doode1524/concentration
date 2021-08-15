import React from 'react' 
import NavBar from './nav';
import Home from './home';
import GamesContainer from './gamesContainer';
import { makeStyles } from '@material-ui/core/styles';
import {
  Route
} from 'react-router-dom';

const useStyles = makeStyles({
  banner: {
    position: "absolute",
    textAlign: "center",
    top: "0",
    background: "lightskyblue",
    boxShadow: "darkblue 5px 5px",
    marginLeft: "10%",
    marginRight: "10%",
    padding: "1em",
    width: "80%"
  }
})

const Banner = () => {
  const classes = useStyles();

  return(
    <div className={classes.banner}>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/games" component={(routeInfo) => <GamesContainer routeData={routeInfo} />} />
      <hr style={{color: "black"}}></hr>
    </div>
  )
}

export default Banner;
