const makeAGame = (games) => {
  return (dispatch) => {
  fetch('http://127.0.0.1:3001/games',{
    method: 'post',
    body: JSON.stringify(games)
  }).then(r => r.json())
    .then(games => {
      dispatch({type: "makeAGame", payload: {games}})
  })
}
}

export {makeAGame}