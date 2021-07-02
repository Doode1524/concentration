
import React, {Component} from 'react' 
import CardFront from '../functional_components/cardFront';
import CardBack from '../functional_components/cardBack';

class PlayingCard extends Component {

  

  onClickHandler = () => {
    
    this.props.flipCard(this.props.id)
     
  }

  render() {
    return(
      <div 
        className='playingCard'
        onClick={this.onClickHandler}
      >
        {this.props.flipped ? 
          <CardFront className='cardFront'
            image={this.props.image}
            name={this.props.name}
            id={this.props.id}
            flipped={this.props.flipped}
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
