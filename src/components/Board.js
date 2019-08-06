import React from 'react';
import Square from "./Square";

const Board = ({ gridRowNum, gridColNum, snakeData, foodData }) => {
    const squareNums = gridRowNum * gridColNum;
    const gridTemplateStyle = {
        display: 'grid',
        gridGap: '2px',
        gridTemplateColumns: 'repeat('+gridColNum+', 18px)',
        gridTemplateRows: 'repeat('+gridRowNum+', 18px)',
    };

    return (
        <div className="boardWrapper">
            <div className="boardGrid" style={gridTemplateStyle}>
                { Array(squareNums).fill().map((_, i) => {
                    return (<Square key={i} isSnakeHead={i===snakeData[snakeData.length-1]} isSnakeOn={snakeData.includes(i)} isFoodOn={i === foodData} />)
                })}
            </div>
        </div>
    );
};

export default Board;