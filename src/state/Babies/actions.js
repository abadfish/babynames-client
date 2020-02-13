import {
  makeFetchRequest,
  finishFetchRequest,
  unsuccessfulFetchRequest
} from '../appTransactions'
import BabiesService from '../../services/BabiesService'

const setBaby = baby => {
  return {
    type: 'SUCCESSFUL_BABY_FETCH',
    baby
  }
}
export const fetchBaby = (babyId) => {
  return dispatch => {
    dispatch(makeFetchRequest())
    BabiesService.fetchBaby(babyId)
    .then(baby => {
      dispatch(setBaby(baby))
    })
  }
}

// export const addName = (babyId, name) => {
//   return dispatch => {
//     dispatch(makeFetchRequest())
//     BabiesService.createName(babyId, name)
//     .then(baby => {
//       dispatch(updateBaby(baby))
//     })
//   }
// }
