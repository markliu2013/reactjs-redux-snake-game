import React from 'react';

const GameSpeedSelect = ({options, value, onChange}) => (
    <div className="gameSpeedSelect">
        <span>Speed</span>
        <select value={value} onChange={e => onChange(e.target.value)}>
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