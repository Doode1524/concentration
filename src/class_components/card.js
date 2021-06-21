import React, {Component} from 'react' 

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class PlayingCard extends Component {

  render() {
    return(
      <Card>
        <CardActionArea>
          <img style={{padding:'20px', maxHeight:'300px'}} src='assets/public/Puppy.jpg'>
          </img>
        </CardActionArea>
      </Card>
    )
  }
}

export default PlayingCard;




// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
// });

// export default function ImgMediaCard() {
//   const classes = useStyles();

//   return (
//     <Card className={classes.root}>
      
//         <CardMedia
//           component="img"
//           alt="Contemplative Reptile"
//           height="140"
//           image="/static/images/cards/contemplative-reptile.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography>
//         </CardContent>
      
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }
