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


class Cards extends Component {
  
  state = {
    click: 0,
    imgFts: [
      {index: '01', name:'Boar', image: img01, flipped: false},
      {index: '02', name:'Boar', image: img01, flipped: false},
      {index: '03', name:'Cat', image: img02, flipped: false},
      {index: '04', name:'Cat', image: img02, flipped: false},
      {index: '05', name:'Cow', image: img03, flipped: false},
      {index: '06', name:'Cow', image: img03, flipped: false},
      {index: '07', name:'Deer', image: img04, flipped: false},
      {index: '08', name:'Deer', image: img04, flipped: false},
      {index: '09', name:'Ducks', image: img05, flipped: false},
      {index: '10', name:'Ducks', image: img05, flipped: false},
      {index: '11', name:'Goose', image: img06, flipped: false},
      {index: '12', name:'Goose', image: img06, flipped: false},
      {index: '13', name:'Horse', image: img07, flipped: false},
      {index: '14', name:'Horse', image: img07, flipped: false},
      {index: '15', name:'Moose', image: img11, flipped: false},
      {index: '16', name:'Moose', image: img11, flipped: false},
      {index: '17', name:'Piglet', image: img08, flipped: false},
      {index: '18', name:'Piglet', image: img08, flipped: false},
      {index: '19', name:'Puppy', image: img09, flipped: false},
      {index: '20', name:'Puppy', image: img09, flipped: false},
      {index: '21', name:'Rooster', image: img10, flipped: false},
      {index: '22', name:'Rooster', image: img10, flipped: false},
      {index: '23', name:'Wolf', image: img12, flipped: false},
      {index: '24', name:'Wolf', image: img12, flipped: false}
    ]
  }

  // someMethod = () => {
  //   this.setState
  // }


  // shuffle() {

  //   for (let i = array.length - 1; i > 0; i--) {
  //       let j = Math.floor(Math.random() * (i + 1));
            
  //       let temp = array[i];
  //       array[i] = array[j];
  //       array[j] = temp;
  //   }
  // }

  render() {
    return(
      <div style={{marginTop: '30px'}}>

      

      <Grid container>
         <Grid item container direct='row' justify='space-evenly'>  
          {this.state.imgFts.map((img) => (
            <PlayingCard 
              key={img.index} 
              front={img.image} 
              name={img.name} 
              index={img.index}
              flipped={img.flipped}
            />
          ))}
        </Grid>
      </Grid>
      </div>
  
    )
  }
}
export default Cards;