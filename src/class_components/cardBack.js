import React, {Component} from 'react'
import img from '../public/cardBack.jpg'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
 
class CardBack extends Component {

  render() {
    return(
      <Card>
        <CardActionArea>
          <img style={{padding:'20px', maxHeight:'300px'}} src={img}>
          </img>
        </CardActionArea>
      </Card>
    )
  }
}

export default CardBack;