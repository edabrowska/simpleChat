import { ADD_MESSAGE } from '../consts'

const initialState = {
  messagesList: []
}

const messagesReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      return Object.assign({}, state, {
        messagesList: state.messagesList.concat(action.payload)
      })

    default:
      return state
  }
}

export default messagesReducer
