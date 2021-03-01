import produce from 'immer';
import {
  SET_ACTIVE_USER
} from './actionTypes';

const initialState = {
  user: {},
  passwordChanged: false
};

function reducer(state = initialState, { type, payload }) {
  return produce(state, draft => {
    /*eslint-disable indent */
    switch (type) {
      case SET_ACTIVE_USER:
        draft.user = payload;
        break;
    }
  });
}

export default reducer;
