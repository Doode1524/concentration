export default function games(state=[], action) {
  switch (action.type){
    case 'FETCH_GAMES':
      //return a list of all games
      return action.payload.games;
  
    case 'NEW_GAME':
      //return a game id
      return action.payload.game;
  
    default:
      return state;  
  }
}

