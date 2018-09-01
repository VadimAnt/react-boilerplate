import {
  FETCH_POSTS_PENDING,
  FETCH_POSTS_REJECTED,
  FETCH_POSTS_SUCCESS,
  NEW_POSTS,
} from './types';

const INITIAL_STATE = {
  fetching: false,
  error: {},
  items: [],
  item: {},
};

const postReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case FETCH_POSTS_PENDING:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_POSTS_REJECTED:
      return {
        ...state,
        fetching: false,
        error: actions.payload,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        fetching: false,
        items: actions.payload,
      };
    case NEW_POSTS:
      return {
        ...state,
        item: actions.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
