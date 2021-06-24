import React, {Component} from 'react'
import bgImg from '../images/cardBack.jpg'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
 
class CardBack extends Component {



  render() {
    return(
      <div style={{backgroundImage: '../images/cardBack.jpg'}}></div>
    )
  }
}

export default CardBack;



