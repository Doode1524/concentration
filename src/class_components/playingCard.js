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


class PlayingCard extends Component {

  render() {
    return(
      <div>
        <CardFront />
        <CardBack />
      </div>
    )
  }
}

export default PlayingCard;


