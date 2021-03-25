// types
const START_LOADING_ELEMENT = '/movies/START_LOADING_ELEMENT'
const FINISH_LOADING_ELEMENT = '/movies/FINISH_LOADING_ELEMENT'

// initial state
const initialState = {
  loading: true
}

export function weather(state = initialState, action) {
  switch (action.type) {
    case START_LOADING_ELEMENT:
      return {
        ...state,
        loading: true
      }
    case FINISH_LOADING_ELEMENT:
      return {
        ...state,
        loading: false
      }

    default:
      return state
  }
}

const startLoadingElement = () => {
  return {
    type: START_LOADING_ELEMENT
  }
}

const finishLoadingElement = () => {
  return {
    type: FINISH_LOADING_ELEMENT
  }
}
