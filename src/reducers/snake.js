import {
    MOVE_UP
} from '../constants/ActionTypes';

import * as directions from '../constants/Directions';

const initialState = {
    direction: directions.LEFT,
    data: [0, 1, 2],
    speedValue: 5 // match speedOptions index, it is level
};

export default function snake(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}