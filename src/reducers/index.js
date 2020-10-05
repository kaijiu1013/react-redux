import { combineReducers } from 'redux';
import home from './home_reducer';
import movie from './movie_reducer';

const rootReducer = combineReducers({
    home, // stand for state.home
    movie // stand for state.movie
});

export default rootReducer;

