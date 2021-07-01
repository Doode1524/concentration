
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
