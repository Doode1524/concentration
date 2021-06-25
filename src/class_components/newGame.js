import React, { Component } from 'react' 

class NewGame extends Component {

  state = {
    intitals: "",
    numPics: "8"
  }

  handleChange = (e) => {
    this.setState({
      intitals: {value: e.target.value},
      numPics: {value: e.target.value}
    })

  }

  handleSubmit(e){
    e.preventDefault();

  }

  render (){
    return(
      <form className="newGame" onSubmit={this.handleSubmit}>
        <label>Initials</label>
        <input 
          type='text'
          name='Initials'
          placeholder='TTT'
          value={this.state.intitals.value} 
          onChange={this.handleChange}
        ></input><br></br>
        <label>Number of Pictures (*2 for total cards)</label>
        <select value={this.state.numPics.value} onChange={this.handleChange}>       
          <option value="8">4</option>
          <option value="10">5</option>
          <option value="12">6</option>
          <option value="14">7</option>
          <option value="16">8</option>
          <option value="18">9</option>
          <option value="20">10</option>
          <option value="22">11</option>
          <option value="24">12</option>
        </select><br></br>
        <input 
          type="submit"
          value='Make a New Game'
        ></input>
      </form>
    )
  }
}

export default NewGame;
