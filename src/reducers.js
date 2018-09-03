import { combineReducers } from 'redux';
import authReducer from './pages/auth/features/reducers';
import postReducer from './pages/posts/features/reducers';
import homeReducer from './pages/home/features/reducers';
import aboutReducer from './pages/home/features/reducers';

export default combineReducers({
  posts: postReducer,
  home: homeReducer,
  about: aboutReducer,
  auth: authReducer,
});
