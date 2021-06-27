import React, {Component} from 'react' 
import Grid from '@material-ui/core/Grid';
import PlayingCard from './playingCard'

import img01 from '../assets/Boar.jpeg'
import img02 from '../assets/Cat.jpeg'
import img03 from '../assets/Cow.jpeg'
import img04 from '../assets/Deer.jpeg'
import img05 from '../assets/Ducks.jpeg'
import img06 from '../assets/Goose.jpeg'
import img07 from '../assets/Horse.jpg'
import img08 from '../assets/Piglet.jpeg'
import img09 from '../assets/Puppy.jpg'
import img10 from '../assets/Rooster.png'
import img11 from '../assets/Moose.webp'
import img12 from '../assets/Wolf.jpg'

const imgFts = [
  {index: '01', name:'Boar', image: img01},
  {index: '02', name:'Boar', image: img01},
  {index: '03', name:'Cat', image: img02},
  {index: '04', name:'Cat', image: img02},
  {index: '05', name:'Cow', image: img03},
  {index: '06', name:'Cow', image: img03},
  {index: '07', name:'Deer', image: img04},
  {index: '08', name:'Deer', image: img04},
  {index: '09', name:'Ducks', image: img05},
  {index: '10', name:'Ducks', image: img05},
  {index: '11', name:'Goose', image: img06},
  {index: '12', name:'Goose', image: img06},
  {index: '13', name:'Horse', image: img07},
  {index: '14', name:'Horse', image: img07},
  {index: '15', name:'Moose', image: img11},
  {index: '16', name:'Moose', image: img11},
  {index: '17', name:'Piglet', image: img08},
  {index: '18', name:'Piglet', image: img08},
  {index: '19', name:'Puppy', image: img09},
  {index: '20', name:'Puppy', image: img09},
  {index: '21', name:'Rooster', image: img10},
  {index: '22', name:'Rooster', image: img10},
  {index: '23', name:'Wolf', image: img12},
  {index: '24', name:'Wolf', image: img12}
]

class Cards extends Component {

  // state = {
  //   numberClicked: 0
  // }
  
  // onClickHandler = () => {
  //   this.setState ({
  //     numberClicked: this.state.numberClicked + 1
  //   }) 
  // }






  render() {
    return(
      <div style={{marginTop: '100px'}}>

      <Grid container>
         <Grid item container direct='row' justify='space-evenly'>  
          {imgFts.map((img) => (
            <PlayingCard 
              // onClick={this.onClickHandler}
              key={img.index} 
              front={img.image} 
              name={img.name} 
              index={img.index}
              // numberClicked={this.state.numberClicked} 
            />
          ))}
        </Grid>
      </Grid>
      </div>
  
    )
  }
}
export default Cards;