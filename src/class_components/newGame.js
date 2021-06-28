import React, { Component } from 'react' 

class NewGame extends Component {

  state = {
    initials: "",
    numPics: "8"
  }

  handleChange = (e) => {
   
    this.setState({
      [e.target.name]: e.target.value
      
    })

  }

  handleSubmit(e){
    e.preventDefault();

  }

  render (){
    return(
      <div>
        <h2>Play a New Game</h2>
        <form className="newGame" onSubmit={this.handleSubmit}>
          <label>Initials</label>
          <input 
            type='text'
            name='initials'
            placeholder='TTT'
            value={this.state.initials} 
            onChange={this.handleChange}
          ></input>
          <br></br>
          <br></br>
          <label>Number of Pictures (*2 for total cards)</label>
          <select 
            name='numPics' 
            value={this.state.numPics} 
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
            style={{backgroundColor: 'dkblue', color: 'white'}}
            type="submit"
            value='Make a New Game'
          ></input>
          <br></br>
        </form>
      </div>
    )
  }
}

export default NewGame;
