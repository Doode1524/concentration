import React from 'react'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';




const CardFront = (props) => {
  const theme = useTheme();

 



  

  
   return (
    
     <Grid item>
     {console.log(props)}
      
      <Card >
        <CardActionArea>
          <img
            style={{ maxHeight: '150px',  minHeight: '30px', padding: '10px' }}
            src={props.image}
          />
        </CardActionArea>
      </Card>
    </Grid>
    
  
  )


}


export default CardFront;

