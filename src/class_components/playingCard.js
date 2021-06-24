
import React, {Component} from 'react' 
import CardFront from '../functional_components/cardFront';
import CardBack from '../functional_components/cardBack';

class PlayingCard extends Component {

  state = {
    flipped: 0
  }

  

  render() {
    return(
      <div className='playingCard'>
        
        <CardFront
        
        />
        {/* <CardBack 
          
        /> */}
      </div>
    )
  }
}
export default PlayingCard;
