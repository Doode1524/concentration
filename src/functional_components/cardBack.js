

import React from 'react'
import bgImg from '../images/cardBack.jpg'
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
                  style={{ height: "" ? "300px" : "50px"}}
                  src='https://lh3.googleusercontent.com/proxy/qkWwpXrG59BBy54iaABgCkBaUBlq5C6qUxNftCfArSdXl4SSLKKYi4UiEpZTM8mRJfrX8n0Z8JYOSaYyeaj8vX1g2DrR4Qw'
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <CardActionArea>
                <img
                  style={{ height: "" ? "300px" : "50px"}}
                  src='https://lh3.googleusercontent.com/proxy/qkWwpXrG59BBy54iaABgCkBaUBlq5C6qUxNftCfArSdXl4SSLKKYi4UiEpZTM8mRJfrX8n0Z8JYOSaYyeaj8vX1g2DrR4Qw'
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



