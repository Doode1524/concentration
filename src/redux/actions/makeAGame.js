const makeAGame = (gameData) => {
  return (dispatch) => {
    fetch('http://127.0.0.1:3001/games',{
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({game: gameData})
    }).then(r => r.json())
      .then(game => {
        dispatch({type: "NEW_GAME", payload: game})
    })
  }
}

export { makeAGame }