import { combineReducers } from 'redux';
import board from './board';
import snake from './snake';
import food from './food';

const rootReducer = combineReducers({
    board,
    snake,
    food
});

export default rootReducer;