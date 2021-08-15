import React, { Component } from 'react' 
import NewGameH2 from './newGameH2';
import { connect } from 'react-redux';
import { makeAGame } from '../redux/actions/makeAGame';

class NewGame extends Component {
  state = {
    initials: "",
    numCards: "selectValue"
  }

   handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value 
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.makeAGame(this.state)
  }

  render (){
    return (
      <div>
        <NewGameH2 />
        <form className="newGame" onSubmit={this.handleSubmit}>
          <label>Initials  </label>
          <input 
            type='text'
            name='initials'
            placeholder='TTT'
            value={this.state.initials} 
            onChange={this.handleChange}
          ></input>
          <br></br><br></br>
          <label>Number of Matches (* 2 for total cards)   </label>
          <select 
            name='numCards' 
            value={this.state.numCards} 
            onChange={this.handleChange}
          > 
            <option value="selectValue">Select An Option</option>
            <option value="6">3</option>      
            <option value="8">4</option>
          </select>
          <br></br><br></br>
          <input 
            disabled={ this.state.initials === "" || this.state.numCards === "selectValue"}  
            style={{backgroundColor: 'darkblue', color: 'white'}}
            type="submit"
            value='Make a New Game'
          ></input>
          <br></br>
        </form>
      </div>
    )
  }    
}

export default connect((state) => {
  return {game: state.game}
}, {makeAGame})(NewGame);
