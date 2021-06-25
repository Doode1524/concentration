
import './App.css';
import Banner from './functional_components/banner';
import Cards from './class_components/cards';
import Home from './functional_components/home';
import AllGames from './functional_components/games';
import NewGame from './class_components/newGame';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';





export default App;

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <Home />
  },
  {
    path: "/Games/new",
    sidebar: () => <div>New Game</div>,
    main: () => <NewGame />
  },
  {
    path: "/Games",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <AllGames />
  }
];

function App() {
  return (
   
    <div className="App" style={{ display: "flex" }}>
      <Banner />
      {/* <Cards /> */}
      <Router>
      
        <div
          style={{
            position: 'absolute',
            top: '0px',
            left: '0px',
            padding: "10px",
            width: "40%",
            
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Games/new">New Game</Link>
            </li>
            <li>
              <Link to="/Games">Games List</Link>
            </li>
          </ul>
        
          <Switch>
            {routes.map((route, index) => (
            
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>
        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
    
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </Router>
    </div>
  
  );
}
  


