import { createSelector } from 'reselect';

const notesSelector = state => state.note;

export const notesSelector = () =>
  createSelector(notesSelector, state => state.notes);
