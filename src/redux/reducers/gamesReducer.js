export default function games(state=[], action) {
  switch (action.type){
    case 'SET_GAMES':
      return action.payload;
    case 'NEW_GAME':
      return [...state, action.payload];
    default:
      return state;  
  }
}

