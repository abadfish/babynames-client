import BabiesService from '../../services/BabiesService'
import {
  makeFetchRequest,
  finishFetchRequest,
  unsuccessfulFetchRequest
} from '../appTransactions'


const setNames = names => {
  return {
    type: 'SET_NAMES',
    names,
    babyId: names[0].baby.id
  }
}

const setName = name => {
  return {
    type: 'SET_NAME',
    name,
    // babyId: name.baby.id
  }
}

const addName = name => {
  return {
    type: 'ADD_NAME',
    name,
    babyId: name.baby_id
  }
}

const replaceName = name => {
  return {
    type: 'REPLACE_NAME',
    name,
    babyId: name.baby_id
  }
}


export const fetchNames = babyId => {
  return dispatch => {
    dispatch(makeFetchRequest())
    BabiesService.fetchNames(babyId)
    .then(names => {
      dispatch(finishFetchRequest())
      dispatch(setNames(names))
    })
    .catch(err => dispatch(unsuccessfulFetchRequest()));
  }
}

export const fetchName = (babyId, nameId) => {
  return dispatch => {
    dispatch(makeFetchRequest())
    BabiesService.fetchName(babyId, nameId)
    .then(name => {
      dispatch(setName(name))
      dispatch(finishFetchRequest())
    })
    .catch(err => dispatch(unsuccessfulFetchRequest()));
  }
}

export const createName = (name, babyId) => {
  return dispatch => {
    dispatch(makeFetchRequest())
    BabiesService.createName(name, babyId)
    .then(name => {
      dispatch(addName(name))
      dispatch(finishFetchRequest())
    })
    .catch(err => dispatch(unsuccessfulFetchRequest()));
  }
}

export const updateName = (babyId, name) => {
  return dispatch => {
    dispatch(makeFetchRequest())
    BabiesService.updateName(babyId, name)
    .then(name => {
      dispatch(replaceName(name))
      dispatch(finishFetchRequest())
    })
    .catch(err => dispatch(unsuccessfulFetchRequest()));
  }
}
