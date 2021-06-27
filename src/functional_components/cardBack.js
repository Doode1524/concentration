import React from 'react'

import bgImg from '../assets/cardBack.png'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import Grid from '@material-ui/core/Grid';



 
const CardBack = () => {

  

  return (
  
    <Grid item>
      <Card>
        <CardActionArea>
          <img
            alt='BackGround Image'
            style={{ height: "150px", padding: '20px' }}
            src={bgImg}
          />
        </CardActionArea>
      </Card>
    </Grid>

  
  )


}


export default CardBack;



