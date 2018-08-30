import { FETCH_POSTS, NEW_POSTS } from './types';

const INITIAL_STATE = {
  items: [],
  item: {},
};

const postReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case FETCH_POSTS:
      return {
        ...state,
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