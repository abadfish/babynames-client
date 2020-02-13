export const makeFetchRequest = () => {
  return {
    type: 'MAKING_API_REQUEST',
  }
}

export const finishFetchRequest = () => {
   return {
     type: 'FINISHED_API_REQUEST'
   }
}

export const unsuccessfulFetchRequest = () => {
   return {
     type: 'UNSUCCESSFUL_API_REQUEST'
   }
}



export default (state = {
  makingRequestToAPI: false,
  lastRequestFailed: false,
}, action) => {
  switch (action.type) {

    case "MAKING_API_REQUEST":
      return {
        ...state,
        makingRequestToAPI: true
      }

    case "FINISHED_API_REQUEST":
      return {
        ...state,
        makingRequestToAPI: false
      }

    case "UNSUCCESSFUL_API_REQUEST":
      return {
        ...state,
        makingRequestToAPI: false,
        lastRequestFailed: true,
      }

    default:
      return state
  }
}
