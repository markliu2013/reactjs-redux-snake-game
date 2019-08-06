import React from 'react';
import classNames from 'classnames';

const Square = ({isSnakeHead, isSnakeOn, isFoodOn}) => {
    let squareClass = classNames({
        square: true,
        snakeHead: isSnakeHead,
        onSnake: isSnakeOn,
        onFood: isFoodOn
    });
    return (
        <div className={squareClass}></div>
    );
};

export default Square;