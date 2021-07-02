import React, {Component} from 'react' 
import Grid from '@material-ui/core/Grid';
import PlayingCard from './playingCard'

import img1 from '../assets/Boar.jpeg'
import img2 from '../assets/Cat.jpeg'
import img3 from '../assets/Cow.jpeg'
import img4 from '../assets/Deer.jpeg'
import img5 from '../assets/Ducks.jpeg'
import img6 from '../assets/Goose.jpeg'
import img7 from '../assets/Piglet.jpeg'
import img8 from '../assets/Puppy.jpg'
import img9 from '../assets/Rooster.png'

class Cards extends Component {
  
  state = {
    click: 0,
    imgFrts: [
      {id: 1, name:'Boar', image: img1, flipped: false, match: false},
      {id: 2, name:'Boar', image: img1, flipped: false, match: false},
      {id: 3, name:'Cat', image: img2, flipped: false, match: false},
      {id: 4, name:'Cat', image: img2, flipped: false, match: false},
      {id: 5, name:'Cow', image: img3, flipped: false, match: false},
      {id: 6, name:'Cow', image: img3, flipped: false, match: false},
      {id: 7, name:'Deer', image: img4, flipped: false, match: false},
      {id: 8, name:'Deer', image: img4, flipped: false, match: false},
      {id: 9, name:'Ducks', image: img5, flipped: false, match: false},
      {id: 10, name:'Ducks', image: img5, flipped: false, match: false},
      {id: 11, name:'Goose', image: img6, flipped: false, match: false},
      {id: 12, name:'Goose', image: img6, flipped: false, match: false},
      {id: 13, name:'Piglet', image: img7, flipped: false, match: false},
      {id: 14, name:'Piglet', image: img7, flipped: false, match: false},
      {id: 15, name:'Puppy', image: img8, flipped: false, match: false},
      {id: 16, name:'Puppy', image: img8, flipped: false, match: false},
      {id: 17, name:'Rooster', image: img9, flipped: false, match: false},
      {id: 18, name:'Rooster', image: img9, flipped: false, match: false}
    ]
  }

  clickCounter = () => {
    this.setState({
        click: this.state.click + 1
    },
    () => {
      if (this.state.click === 2) {
        this.setState({
          imgFrts: imgFrts
        })
      }
    })
  }

  flipCard = (id) => {
   let images = this.state.imgFrts.map((img) => {
      if(img.id === id) {
        img.flipped = true
        return img
      } else {
        return img
      }
    })
    this.setState({
      imgFrts: images
    })
  }

  matchAny = () => {
    // this.state.imgFrts.filter((img) => {
    //     filter by the two objects that flipped is true
    //     
    //     
    //   return t o f
    //  })
    //      if name = name
    //      
    //  if true setState match
  }


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
          {this.state.imgFrts.map((img) => (
            <PlayingCard 
              flipCard={this.flipCard}
              key={img.index} 
              image={img.image} 
              name={img.name} 
              id={img.id}
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