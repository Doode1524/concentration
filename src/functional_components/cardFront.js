import React, {Component} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    flexGrow: 1,
  },
  media: {
    height: 140,
    padding: theme.spacing(1),
    textAlign: 'center',
  },
}));

 
const CardFront = (props) => {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <CardMedia 
            className={classes.media}
            image={props.image}
          >item</CardMedia>
        </Grid>
        <Grid item xs={4}>
          <CardMedia className={classes.media}>item</CardMedia>
        </Grid>
        <Grid item xs={4}>
          <CardMedia className={classes.media}>item</CardMedia>
        </Grid>
      </React.Fragment>
    );
  }

  return(
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.image}
      >
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
        </Grid>  
      </CardMedia>
    
    </Card>

  )
}


export default CardFront;

