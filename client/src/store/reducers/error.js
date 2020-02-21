import { SHOW_ERROR } from '../consts'

const initialState = {}

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ERROR:
      return Object.assign({}, state, {
        text: action.payload
      })

    default:
      return state
  }
}

export default errorReducer
