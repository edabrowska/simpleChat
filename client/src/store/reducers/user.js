import { ADD_USER } from '../consts'

const initialState = {}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return Object.assign({}, state, {
        details: action.payload
      })

    default:
      return state
  }
}

export default userReducer
