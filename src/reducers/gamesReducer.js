export default function games(state=[], action) {
  if (action.type === 'setGames') {
    return action.payload.games
  } else if (action.type === 'makeAGame') {
    return action.payload.games
  } else {
    return state // In case an action is passed in we don't understand
  }
}