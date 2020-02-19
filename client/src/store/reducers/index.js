import { combineReducers } from 'redux'

import participantsReducer from './participants'
import messagesReducer from './messages'
import userReducer from './user'

const rootReducer = combineReducers({
  participants: participantsReducer,
  messages: messagesReducer,
  user: userReducer
})

export default rootReducer
