import React from 'react'

import bgImg from '../assets/cardBack.png'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

 
const CardBack = () => {

  return (
  
    <Card>
      <CardActionArea>
        <img
          alt='BackGround'
          style={{ height: "150px", padding: '20px' }}
          src={bgImg}
        />
      </CardActionArea>
    </Card>
   
  )
}

export default CardBack;



