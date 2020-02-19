import { ADD_PARTICIPANT, ADD_MESSAGE, ADD_USER } from '../consts'

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

export const addUser = (payload) => {
  return {
    type: ADD_USER,
    payload
  }
}