export default (state = [], action) => {
  switch(action.type) {
    case 'SET_NAMES':
      return action.names

    case 'SET_NAME':
      return {
        name: action.name
      }

    case 'ADD_NAME':
      return state.concat(action.name)

    default:
      return state
  }
}
