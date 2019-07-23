import React from 'react';

const GameScore = ({ score }) => (
    <div className="gameScoreInfo"><span>Score: </span><strong>{score}</strong></div>
);

export default GameScore;