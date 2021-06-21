import React, {Component} from 'react'
import img01 from '../images/Boar.jpeg'
import img02 from '../images/Cat.jpeg'
import img03 from '../images/Cow.jpeg'
import img04 from '../images/Deer.jpeg'
import img05 from '../images/Ducks.jpeg'
import img06 from '../images/Goose.jpeg'
import img07 from '../images/Horse.jpg'
import img08 from '../images/Piglet.jpeg'
import img09 from '../images/Puppy.jpg'
import img10 from '../images/Rooster.png'
import img11 from '../images/Moose.webp'
import img12 from '../images/Wolf.jpg'
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
    imgs.map((img,index) => {
      img.index,
      img.name
    })
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

