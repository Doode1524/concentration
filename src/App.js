import './App.css';
import Banner from './functional_components/banner';
import { useState } from 'react'

function App() {

  const [darkMode,setDarkMode] = useState(false)

  const clickHandler = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="App" style={ darkMode ? { backgroundColor: 'black', color: 'cornsilk'} : { backgroundColor: 'bisque', color: 'dkblue'} }>

      <div>
        <button onClick={clickHandler} style={{backgroundColor: 'black', color: 'cornsilk'}}>Dark Mode</button>
      </div>

      <Banner />
      
    </div>
  
  );
}

export default App;
