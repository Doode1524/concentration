import React from 'react'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';

import img01 from '../images/Boar.jpeg'
import img02 from '../images/Cat.jpeg'
import img03 from '../images/Cow.jpeg'
import img04 from '../images/Deer.jpeg'
import img05 from '../images/Ducks.jpeg'
import img06 from '../images/Goose.jpeg'
import img07 from '../images/Horse.jpg'
import img08 from '../images/Piglet.jpeg'
import img09 from '../images/Puppy.jpg'
import img10 from '../images/Rooster.png'
import img11 from '../images/Moose.webp'
import img12 from '../images/Wolf.jpg'



const CardFront = (props) => {
  const theme = useTheme();
  const imgs = [
    {index: '01', name:'Boar', image: img01},
    {index: '02', name:'Boar', image: img01},
    {index: '03', name:'Cat', image: img02},
    {index: '04', name:'Cat', image: img02},
    {index: '05', name:'Cow', image: img03},
    {index: '06', name:'Cow', image: img03},
    {index: '07', name:'Deer', image: img04},
    {index: '08', name:'Deer', image: img04},
    {index: '09', name:'Ducks', image: img05},
    {index: '10', name:'Ducks', image: img05},
    {index: '11', name:'Goose', image: img06},
    {index: '12', name:'Goose', image: img06},
    {index: '13', name:'Horse', image: img07},
    {index: '14', name:'Horse', image: img07},
    {index: '15', name:'Moose', image: img11},
    {index: '16', name:'Moose', image: img11},
    {index: '17', name:'Piglet', image: img08},
    {index: '18', name:'Piglet', image: img08},
    {index: '19', name:'Puppy', image: img09},
    {index: '20', name:'Puppy', image: img09},
    {index: '21', name:'Rooster', image: img10},
    {index: '22', name:'Rooster', image: img10},
    {index: '23', name:'Wolf', image: img12},
    {index: '24', name:'Wolf', image: img12}
  ]
 

  function shuffle(imgs) {
    for (let i = imgs.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = imgs[i];
        imgs[i] = imgs2[j];
        imgs2[j] = temp;
        return imgs2[j]
    }
  }


  

  
   return (
    <div>
      <Grid container>
        <Grid item container direct='row' justify='space-evenly'>
          {imgs2.map((img, index) => (
            <Grid item key={index}>
              <Card >
                <CardActionArea>
                  <img
                    style={{ maxHeight: '150px',  minHeight: '30px', padding: '10px' }}
                    src={img.image}
                  />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
                                     
        </Grid>
      </Grid>
    </div>
  )


}


export default CardFront;

