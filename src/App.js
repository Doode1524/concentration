
import './App.css';
import Banner from './functional_components/banner';
import NavBar from './functional_components/navBar';
import Home from './functional_components/home';
import AllGames from './functional_components/games';
import NewGame from './functional_components/newGame';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Banner />
      
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/Games">
            <AllGames />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/Games/create">
            <NewGame />
          </Route>
        </Switch>
        {/* <Switch>
          <Route path="/Games/:id">
            
          </Route>
        </Switch> */}
      </Router>


    </div>
  );
}

export default App;
