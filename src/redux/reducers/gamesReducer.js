export default function games(state=[], action) {
  switch (action.type){
    case 'SET_GAMES':
      //return a list of all games
      return action.payload;
  
    case 'NEW_GAME':
      //return a game id
      return [...state, action.payload];
  
    default:
      return state;  
  }
}

