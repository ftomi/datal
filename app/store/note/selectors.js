import { createSelector } from 'reselect';

const notesStateSelector = state => state.note;

export const notesSelector = () =>
  createSelector(notesStateSelector, state => state.notes);
