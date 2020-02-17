import { combineReducers } from 'redux'

import participantsReducer from './participants'
import messagesReducer from './messages'

const rootReducer = combineReducers({
  participants: participantsReducer,
  messages: messagesReducer
})

export default rootReducer
