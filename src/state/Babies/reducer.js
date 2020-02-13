import namesReducer from '../Names/reducer';

export default (state = [], action) => {
  switch(action.type) {

    case 'SUCCESSFUL_BABY_FETCH':
      return {
        ...state,
        baby: action.baby
      }


    // case 'SET_NAMES':
    case 'ADD_NAME':
    case 'REPLACE_NAME':
    case 'REMOVE_NAME': {

      // const index = state.findIndex(baby => baby.id === action.babyId);
      // const baby = state[index];
      const baby = state.baby
      const updatedBaby = Object.assign({}, baby, {
        names: namesReducer(baby.names, action)
      })
      return {
        ...state,
        baby: updatedBaby,
      }
    }

    default:
      return state
  }
}
