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
      imgFrnts: [
        {id: 1, name:'Cat', image: img1, flipped: false, match: false},
        {id: 2, name:'Cat', image: img1, flipped: false, match: false},
        {id: 3, name:'Ducks', image: img2, flipped: false, match: false},
        {id: 4, name:'Ducks', image: img2, flipped: false, match: false},
        {id: 5, name:'Piglet', image: img3, flipped: false, match: false},
        {id: 6, name:'Piglet', image: img3, flipped: false, match: false},
        {id: 7, name:'Puppy', image: img4, flipped: false, match: false},
        {id: 8, name:'Puppy', image: img4, flipped: false, match: false}
      ],
      flippedCards: []
    }
  }

  componentDidMount(){
    this.setState({
      imgFrnts: this.shuffleCards(this.state.imgFrnts)
    })
  }

  clickCounter = () => {
    this.setState({
        click: this.state.click + 1
    })
  }

  // checkImg = () => {
    // if (this.state.click == 2) {
    //   console.log(this.state.click)
  
      // if (this.state.flippedCards.forEach((image) => {
      //   console.log(this.state.flippedCards)
      //   if (this.state.flippedCards[0].name === this.state.flippedCards[0].name) {
      //     image.flipped = true
      //   }
      //   else {
      //     image.flipped = false
      //   }
      // }))
 
  checkImg = () => {
    if (this.state.click == 2) {
      console.log(this.state.click)
      switch (this.state.flippedCards.forEach((image) => {
        case (this.state.flippedCards[0].name === this.state.flippedCards[0].name):
          return image.flipped = true;
        case (this.state.flippedCards[0].name !== this.state.flippedCards[0].name):
          return image.flipped = false;
        default:
          return image.flipped = false;  
      }))
    }
  }

  flipCard = (id) => {
   let images = this.state.imgFrnts.map((img) => {
      
      if(img.id === id) {
        img.flipped = true
        if (this.state.click < 2) {
          this.state.flippedCards.push(img)
        }

        return img
      } else {
        return img
      }
      })
    this.setState({
      imgFrnts: images
    })
  }

  matchAny = (name) => {
   let flpdImgs = this.state.imgFrnts.filter((img) => {
      switch(img.flipped === true) {
        case true:
          return img
        default:
          this.setState({
            imgFrnts: this.state.imgFrnts
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
      //       imgFrnts: this.state.imgFrnts
      //     })
      // }
    })   
      
   
    //      if name = name
         
    //  if true setState match
  }

  
  shuffleCards(array) {
  function swap(array, i, j) {
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
   }

    const length = array.length;
    for (let i = length; i > 0; i--) {
       const randomIndex = Math.floor(Math.random() * i);
       const currentIndex = i - 1;
       swap(array, currentIndex, randomIndex)
   
    }
    return array;
 }

  render() {
    return(
      <div style={{marginTop: '30px'}}>
        <Timer />
        <Grid container alignContent={'center'}>   
          {this.state.imgFrnts.map((img) => (
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