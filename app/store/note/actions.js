import {
  LOAD_NOTES,
  GET_NOTES,
  SAVE_NOTE,
  ADD_NOTE,
  ADD_NOTES
} from './actionTypes';


export function loadNotes() {
  return {
    type: LOAD_NOTES
  };
}


export function saveNote(note) {
  return {
    type: SAVE_NOTE,
    payload: note
  };
}

export function addNotes(notes) {
  return {
    type: ADD_NOTES,
    payload: notes
  };
}

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
