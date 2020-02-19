import { ADD_PARTICIPANT } from '../consts'

const initialState = {
  participantsList: []
}

const participantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PARTICIPANT:
      return Object.assign({}, state, {
        participantsList: state.participantsList.concat(action.payload)
      })

    default:
      return state
  }
}

export default participantsReducer
