import React from 'react'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';


const CardFront = (props) => {
  
   return (
   
    <Card >
      <CardActionArea>
        <img
          style={{ maxHeight: '150px', padding: '20px' }}
          alt={props.name}
          src={props.image}
        />
      </CardActionArea>
    </Card>
   
  )


}


export default CardFront;

