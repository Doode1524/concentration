import './App.css';
import Banner from './functional_components/banner';
// import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  App: {
    height: "100%",
    width: "100%",
    margin: "0",
    padding: "0",
    fontFamily: "sans-serif",
    backgroundColor: 'bisque',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap"
  }
})

function App() {
  const classes = useStyles();

  // const [darkMode,setDarkMode] = useState(false)

  // const clickHandler = () => {
  //   setDarkMode(!darkMode)
  // }

  return (
    <div className={classes.App} >

    {/* style={ darkMode ? { backgroundColor: 'black', color: 'cornsilk'} : { backgroundColor: 'bisque', color: 'dkblue'} } */}

      {/* <div>
        <button onClick={clickHandler} style={{backgroundColor: 'black', color: 'cornsilk'}}>Dark Mode</button>
      </div> */}

      <Banner />
      
    </div>
  
  );
}

export default App;
