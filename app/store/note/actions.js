import {
  GET_NOTES,
  ADD_NOTE
} from './actionTypes';



export function addNote(note) {
  return {
    type: ADD_NOTE,
    payload: note
  };
}

export function getNotes() {
  return {
    type: GET_NOTES
  };
}
