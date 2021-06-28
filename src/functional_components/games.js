
import React from 'react' 

const GamesList = () => {

  let fetchGames = () => {
    fetch('http://127.0.0.1:3001/games')
      .then(r => r.json)
      .then(json => console.log(json))
  }


  return(
    <>
      {fetchGames()}
    </>
  )
}

export default GamesList;



