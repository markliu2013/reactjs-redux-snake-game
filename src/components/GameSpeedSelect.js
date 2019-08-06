import React from 'react';

const GameSpeedSelect = ({options, value, onChange}) => (
    <div className="gameSpeedSelect">
        <label>
            Speed Level:
            <select value={value} onChange={e => onChange(e.target.value)}>
                {options.map((option, i) => (
                    <option value={option} key={i}>
                        {i+1}
                    </option>
                ))}
            </select>
        </label>
    </div>
);

export default GameSpeedSelect;