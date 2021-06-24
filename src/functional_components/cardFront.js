import React from 'react'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';



 
const CardFront = (props) => {
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
                  src='https://i.pinimg.com/736x/d6/0c/7e/d60c7e8983fdbd7c7a27fd42fb3d61ba.jpg'
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <CardActionArea>
                <img
                  style={{ height: "150px", padding: '20px' }}
                  src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cat-quotes-1571153136.jpg?crop=0.665xw:1.00xh;0.168xw,0&resize=640:*'
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <CardActionArea>
                <img
                  style={{ height: "150px", padding: '20px' }}
                  src='https://i1.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?fit=1920%2C1920&ssl=1'
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <CardActionArea>
                <img
                  style={{ height: "150px", padding: '20px' }}
                  src='https://imtopic.com/media/upload/images/202004/7edffaebacda1c3dffae0a47347c5aa3.jpeg'
                />
              </CardActionArea>
            </Card>
          </Grid> 
          <Grid item>
            <Card>
              <CardActionArea>
                <img
                  style={{ height: "150px", padding: '20px' }}
                  src='https://lh3.googleusercontent.com/proxy/5N3qJj72NbpmDEcr0_T-Vj57QHEv2rRwV_RnSsU5pR8b8BCRNLzSBsDiwp9VoixotgCHVbxWd-W7d-YDZqHDqhxAt8X_LB9cEhY4-3ZWizKkMonzF-c'
                />
              </CardActionArea>
            </Card>
          </Grid> 
          <Grid item>
            <Card>
              <CardActionArea>
                <img
                  style={{ height: "150px", padding: '20px' }}
                  src='https://images.all-free-download.com/images/graphiclarge/funny_cat_194619.jpg'
                />
              </CardActionArea>
            </Card>
          </Grid>                                       
        </Grid>
      </Grid>
    </div>
  )


}


export default CardFront;

