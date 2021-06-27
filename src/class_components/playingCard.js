
import React, {Component} from 'react' 
import CardFront from '../functional_components/cardFront';
import CardBack from '../functional_components/cardBack';

class PlayingCard extends Component {

  state = {
    flipped: 0
  }

  onClickHandler = () => {
    this.setState ({
      flipped: !this.state.flipped
    }) 
  }
  


  


    // something () {
    //   if (this.props.name === this.props.name ){
    //     // leave flipped add 1 point
    //   } else {
    //       // flipped: 0
    //   }
    // }
  

  render() {
    return(
      <div 
        className='playingCard'
        onClick={this.onClickHandler}
      >
        {this.state.flipped ? 
          <CardFront className='cardFront'
            image={this.props.front}
            name={this.props.name}
            index={this.props.index}
            // number={this.props.numberClicked}
          />
          :
          <CardBack className='cardBack'
            image={this.props.image}  
          />
        }
      </div>
    )
  }
}
export default PlayingCard;
