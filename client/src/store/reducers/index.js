import { combineReducers } from 'redux'

import participantsReducer from './participants'
import messagesReducer from './messages'
import userReducer from './user'
import errorReducer from './error'

const rootReducer = combineReducers({
  participants: participantsReducer,
  messages: messagesReducer,
  user: userReducer,
  error: errorReducer
})

export default rootReducer
