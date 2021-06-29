import React, { Component } from 'react' 
import { connect } from 'react-redux';
import { MakeAGame } from '../redux/actions/makeAGame';

class NewGame extends Component {
  componentDidMount(){
    this.props.MakeAGame()
  }

   handleChange = (e) => {
    this.props.game({
      [e.target.name]: e.target.value 
    })
  }

  handleSubmit(e){
    e.preventDefault();
    e.props.onSubmit()
  }

  render (){
    return(
      <div>
        <h2>Play a New Game</h2>
        <form className="newGame" onSubmit={this.handleSubmit}>
          <label>Initials  </label>
          <input 
            type='text'
            name='initials'
            placeholder='TTT'
            value={this.props.initials} 
            onChange={this.handleChange}
          ></input>
          <br></br>
          <br></br>
          <label>Number of Pictures (*2 for total cards)   </label>
          
          <select 
            name='numPics' 
            value={this.props.numPics} 
            onChange={this.handleChange}
          >       
            <option value="8">4</option>
            <option value="10">5</option>
            <option value="12">6</option>
            <option value="14">7</option>
            <option value="16">8</option>
            <option value="18">9</option>
            <option value="20">10</option>
            <option value="22">11</option>
            <option value="24">12</option>
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
  }
}
export default connect((state) => {
  return {game: state.game}
}, {MakeAGame})(NewGame);
