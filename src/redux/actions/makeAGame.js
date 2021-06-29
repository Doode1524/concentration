const MakeAGame = (game) => {
  return (dispatch) => {
  fetch('http://127.0.0.1:3001/games',{
    method: 'post',
    body: JSON.stringify(game)
  }).then(r => r.json())
    .then(game => {
      dispatch({type: "NEW_GAME", payload: {game}})
  })
}
}

export { MakeAGame }