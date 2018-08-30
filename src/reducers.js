import { combineReducers } from 'redux';
import postReducer from './pages/posts/features/reducers';

export default combineReducers({
  posts: postReducer,
});
