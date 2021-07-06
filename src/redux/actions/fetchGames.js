const fetchGames = () => {
  return (dispatch) => {
  fetch('http://127.0.0.1:3001/games')
  .then(r => r.json())
  .then(games => {
    dispatch({type: "SET_GAMES", payload: games})
    })
  }
}

export {fetchGames}