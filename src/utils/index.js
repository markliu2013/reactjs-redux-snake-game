// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
import { LEFT, RIGHT, UP, DOWN } from "../constants/Directions";

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function keyCodeToDirection(keyCode) {
    switch (keyCode) {
        case 37:
            return LEFT;
        case 38:
            return UP;
        case 39:
            return RIGHT;
        case 40:
            return DOWN;
        default:
            return LEFT;
    }
}