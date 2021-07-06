import './App.css';
import Banner from './functional_components/banner';
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

  return (
    <div className={classes.App} >
      <Banner />
    </div>
  );
}

export default App;
