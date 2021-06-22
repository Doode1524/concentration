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
import img from '../images/cardBack.jpg'
import React, {Component} from 'react' 
import CardFront from './cardFront';
import CardBack from './cardBack';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';


const imgs = {
  'Boar': img01,
  'Cat': img02,
  'Cow': img03,
  'Deer': img04,
  'Ducks': img05,
  'Goose': img06,
  'Horse': img07,
  'Piglet': img08,
  'Puppy': img09,
  'Rooster': img10,
  'Moose': img11,
  'Wolf': img12
}

class PlayingCard extends Component {

  renderImgs = () => {
    return imgs.map((img) => (
      img
    ),console.log(img))
  }

  render() {
  
    return(
      <Card className='cardFront' >
        <CardActionArea>
          <CardFront 
          
          />
        </CardActionArea>
      </Card>
    )
  }
}

export default PlayingCard;



// export default class MovieCard extends Component {

//   render() {
//     return (
//       <div className="movie-card">
//         {/* which component should receive which props? */}
//         <CardFront 
//           poster={posterMap[this.props.poster]}
//         />
//         <CardBack 
//           title={this.props.title}
//           IMDBRating={this.props.IMDBRating}
//           genres={this.props.genres}
//         />
//       </div>
//     )
//   }
// }

// // Don't forget your default props!
// MovieCard.defaultProps = {
//   title: 'Unknown',
//   IMDBRating: null,
//   genres: ["No Genre(s) Found"],
//   poster: 'default'
// }
