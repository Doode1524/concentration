import React, { Component } from 'react' 
import { connect } from 'react-redux';
import { makeAGame } from '../redux/actions/makeAGame';
import Cards from './cards';

class NewGame extends Component {
  state = {
    initials: "",
    numPics: "selectValue"
  }

   handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value 
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.makeAGame()
  }

  render (){
    {if ( this.state.initials === "" || this.state.numPics === "selectValue"){
    return (
        <div>
          <h2>Play a New Game</h2>
            <form className="newGame" onSubmit={this.handleSubmit}>
              <label>Initials  </label>
              <input 
                type='text'
                name='initials'
                placeholder='TTT'
                value={this.state.initials} 
                onChange={this.handleChange}
              ></input>
              <br></br>
              <br></br>
              <label>Number of Matches (* 2 for total cards)   </label>
              <select 
                name='numPics' 
                value={this.state.numPics} 
                onChange={this.handleChange}
              > 
                <option value="selectValue">Select An Option</option>
                <option value="6">3</option>      
                <option value="8">4</option>
                <option value="10">5</option>
                <option value="12">6</option>
                <option value="14">7</option>
                <option value="16">8</option>
                <option value="18">9</option>
              </select>
              <br></br>
              <br></br>
              <input 
                style={{backgroundColor: 'darkblue', color: 'white'}}
                type="submit"
                value='Make a New Game'
              ></input>
              <br></br>
            </form>
          </div>
        )
      } else {
        <Cards />
      }
    }


        
  }
}
export default connect((state) => {
  return {game: state.game}
}, {makeAGame})(NewGame);
