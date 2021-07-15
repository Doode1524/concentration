import React, { Component } from 'react' 
import NewGameH2 from '../functional_components/newGameH2';
import { connect } from 'react-redux';
import { makeAGame } from '../redux/actions/makeAGame';

class NewGame extends Component {
  state = {
    initials: "",
    numCards: "selectValue",
    score: "selectValue"
  }

   handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value 
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.makeAGame(this.state)
    this.props.history.push("/games")
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
            <option value="10">5</option>
            <option value="12">6</option>
            <option value="14">7</option>
            <option value="16">8</option>
            <option value="18">9</option>
          </select>
          <br></br><br></br>
          <label>Score  </label>
          <select 
            name='score' 
            value={this.state.score} 
            onChange={this.handleChange}
          > 
            <option value="selectValue">Select An Option</option>
            <option value="6">6</option>      
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="16">16</option>
            <option value="18">18</option>
          </select>
          <br></br><br></br>
          <input 
            disabled={ this.state.initials === "" || this.state.numCards === "selectValue" || this.state.score === "selectValue"}  
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
