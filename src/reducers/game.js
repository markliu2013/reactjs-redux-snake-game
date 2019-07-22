//var gameState = 1;// game status  1 stopped  2 running  3 paused
import { RESETED, RUNNING, PAUSED } from '../constants/GameStatus';

const initialState = {
    status: RESETED,
};

export default function game(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}