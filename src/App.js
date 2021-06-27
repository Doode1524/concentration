
import './App.css';
import Banner from './functional_components/banner';
import Cards from './class_components/cards';
import { useState } from 'react'
// import Home from './functional_components/home';
// import AllGames from './functional_components/games';
// import NewGame from './class_components/newGame';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link
// } from 'react-router-dom';


function App() {

  const [darkMode,setDarkMode] = useState(false)

  const clickHandler = () => {
    setDarkMode(!darkMode)
  }

  return (
   
    <div className="App" style={ darkMode ? { backgroundColor: 'black', color: 'cornsilk'} : { backgroundColor: 'bisque', color: 'chocolate'} }>

      <div>
        <button onClick={clickHandler} style={{backgroundColor: 'black', color: 'cornsilk'}}>Dark Mode</button>

      </div>
      <Banner />
      <Cards />
  
    </div>
  
  );
}
  

export default App;
