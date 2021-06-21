import React, {Component} from 'react'
import img01 from '../public/Boar.jpeg'
import img02 from '../public/Cat.jpeg'
import img03 from '../public/Cow.jpeg'
import img04 from '../public/Deer.jpeg'
import img05 from '../public/Ducks.jpeg'
import img06 from '../public/Goose.jpeg'
import img07 from '../public/Horse.jpg'
import img08 from '../public/Piglet.jpeg'
import img09 from '../public/Puppy.jpg'
import img10 from '../public/Rooster.png'
import img11 from '../public/Moose.webp'
import img12 from '../public/Wolf.jpg'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

const imgs = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
  img09,
  img10,
  img11,
  img12
]
 
class CardFront extends Component {

  renderImgs = () => {
    imgs.map()
  }

  render() {
    return(
      <Card>
        <CardActionArea>
          <img style={{padding:'20px', maxHeight:'300px'}} src={this.renderImgs}>
          </img>
        </CardActionArea>
      </Card>
    )
  }
}

export default CardFront;

