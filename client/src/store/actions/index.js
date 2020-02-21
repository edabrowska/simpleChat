import {
  ADD_PARTICIPANT,
  ADD_MESSAGE,
  UPDATE_MESSAGE,
  ADD_USER,
  SHOW_ERROR
} from '../consts'

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

export const updateMessage = (payload) => {
  return {
    type: UPDATE_MESSAGE,
    payload
  }
}

export const showError = (payload) => {
  return {
    type: SHOW_ERROR,
    payload
  }
}