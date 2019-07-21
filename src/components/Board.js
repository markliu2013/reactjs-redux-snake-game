import React from 'react';
import Square from "./Square";

const Board = ({ gridRowNum, gridColNum }) => {
    const squareNums = gridRowNum * gridColNum;
    return (
        <div className="boardWrapper">
            <div className="boardGrid">{ Array(squareNums).fill().map((_, i) => <Square key={i} />) }</div>
        </div>
    );
};

export default Board;