import React, {Component} from 'react' 
import Grid from '@material-ui/core/Grid';
import PlayingCard from './playingCard'
import Timer from './timer';

import img1 from '../assets/Cat.jpeg'
import img2 from '../assets/Ducks.jpeg'
import img3 from '../assets/Piglet.jpeg'
import img4 from '../assets/Puppy.jpg'


class Cards extends Component {
  
  constructor (props) {
    super (props)
    this.state = {
      click: 0,
      imgFrts: [
        {id: 1, name:'Cat', image: img1, flipped: false, match: false},
        {id: 2, name:'Cat', image: img1, flipped: false, match: false},
        {id: 3, name:'Ducks', image: img2, flipped: false, match: false},
        {id: 4, name:'Ducks', image: img2, flipped: false, match: false},
        {id: 5, name:'Piglet', image: img3, flipped: false, match: false},
        {id: 6, name:'Piglet', image: img3, flipped: false, match: false},
        {id: 7, name:'Puppy', image: img4, flipped: false, match: false},
        {id: 8, name:'Puppy', image: img4, flipped: false, match: false}
      ]
    }
  }

  clickCounter = () => {
    this.setState({
        click: this.state.click + 1
    },
    () => {
      if (this.state.click === 2) {
        this.setState({
          imgFrts: this.state.imgFrts
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

  matchAny = (name) => {
   let flpdImgs = this.state.imgFrts.filter((img) => {
      switch(img.flipped === true) {
        case true:
          return img
        default:
          this.setState({
            imgFrts: this.state.imgFrts
          })
      }
    })

    let matchImgs = flpdImgs.map((img) => {
      console.log(this.state.click)
      // switch(img.name === name && img.id ) {
      //   case true:
      //     return img
      //   default:
      //     this.setState({
      //       imgFrts: this.state.imgFrts
      //     })
      // }
    })   
      
   
    //      if name = name
         
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
        <Timer />
        <Grid container>   
          {this.state.imgFrts.map((img) => (
            <Grid item>
              <PlayingCard 
                clickCounter={this.clickCounter}
                matchAny={this.matchAny}
                flipCard={this.flipCard}
                key={img.id} 
                image={img.image} 
                name={img.name} 
                id={img.id}
                flipped={img.flipped}
              />
            </Grid>
          ))}
        </Grid>
     
      </div>
  
    )
  }
}
export default Cards;