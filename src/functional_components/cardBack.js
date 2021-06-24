

import React from 'react'
import bgImg from '../images/cardBack.png'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';



 
const CardBack = (props) => {
  const theme = useTheme();
  

  return (
    <div>
      <Grid container>
        <Grid item container direct='row' justify='space-evenly'>
          <Grid item>
            <Card>
              <CardActionArea>
                <img
                  style={{ height: "150px", padding: '20px' }}
                  src='bgImg'
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <CardActionArea>
                <img
                  style={{ height: "150px", padding: '20px' }}
                  src=''
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )


}


export default CardBack;



