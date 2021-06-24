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

import React, {Component} from 'react' 
import CardFront from '../functional_components/cardFront';
import CardBack from '../class_components/cardBack';

const imgs = [
  {index: '01', name:'Boar', image: img01},
  {index: '02', name:'Cat', image: img02},
  {index: '03', name:'Cow', image: img03},
  {index: '04', name:'Deer', image: img04},
  {index: '05', name:'Ducks', image: img05},
  {index: '06', name:'Goose', image: img06},
  {index: '07', name:'Horse', image: img07},
  {index: '08', name:'Piglet', image: img08},
  {index: '09', name:'Puppy', image: img09},
  {index: '10', name:'Rooster', image: img10},
  {index: '11', name:'Moose', image: img11},
  {index: '12', name:'Wolf', image: img12},
  {index: '13', name:'Boar', image: img01},
  {index: '14', name:'Cat', image: img02},
  {index: '15', name:'Cow', image: img03},
  {index: '16', name:'Deer', image: img04},
  {index: '17', name:'Ducks', image: img05},
  {index: '18', name:'Goose', image: img06},
  {index: '19', name:'Horse', image: img07},
  {index: '20', name:'Piglet', image: img08},
  {index: '21', name:'Puppy', image: img09},
  {index: '22', name:'Rooster', image: img10},
  {index: '23', name:'Moose', image: img11},
  {index: '24', name:'Wolf', image: img12}
]

class PlayingCard extends Component {

  state = {
    flipped: 0
  }

  renderImgs = () => {
    return imgs.map(img => {
      return <CardFront
                        key={img.index}
                        name={img.name}
                        image={img.image}
              />
    })
  }

  render() {
    return(
      <div className='playingCard'>
        {this.renderImgs()}
        
        <CardBack 
          bgImg={this.props.bgImg}
        />
      </div>
    )
  }
}
export default PlayingCard;
