import React from 'react';
import classNames from 'classnames';

const Square = ({isOn}) => {
    let squareClass = classNames({
        square: true,
        'on': isOn
    });
    return (
        <div className={squareClass}></div>
    );
};

export default Square;