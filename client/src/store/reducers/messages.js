import { ADD_MESSAGE, UPDATE_MESSAGE } from '../consts'

const initialState = {
  messagesList: []
}

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return Object.assign({}, state, {
        messagesList: state.messagesList.concat(action.payload)
      })

    case UPDATE_MESSAGE:
      return Object.assign({}, state, {
        messagesList: state.messagesList.map(messageObj => {
          if (messageObj.id === action.payload.id) {
            return {
              ...messageObj,
              message: action.payload.message,
              type: action.payload.type
            }
          }
          return messageObj
        })
      })

    default:
      return state
  }
}

export default messagesReducer
