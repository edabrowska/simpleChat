import { ADD_PARTICIPANT, ADD_MESSAGE } from '../consts'

export const addParticipant = (payload) => {
  return {
    type: ADD_PARTICIPANT,
    payload
  }
}

export const addMessage = (payload) => {
  return {
    type: ADD_MESSAGE,
    payload
  }
}