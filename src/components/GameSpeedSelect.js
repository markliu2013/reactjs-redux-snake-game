import React from 'react';

const GameSpeedSelect = ({options, value}) => (
    <div className="gameSpeedSelect">
        <span>Speed</span>
        <select defaultValue={value}>
            {options.map((option, i) => (
                <option value={option} key={i}>
                    {i+1}
                </option>
            ))}
        </select>
        <span>Level</span>
    </div>
);

export default GameSpeedSelect;