
const setGames = (games) => {
  return (dispatch) => {
  fetch('http://127.0.0.1:3001/games')
  .then(r => r.json())
  .then(games => {
    dispatch({type: "setGames", payload: {games}})
  })
}
}

export {setGames}