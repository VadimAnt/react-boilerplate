import { FETCH_POSTS, NEW_POSTS } from '../actions/types';

const initialState = {
  items: [],
  item: {},
};

export default (state = initialState, actions) => {
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
