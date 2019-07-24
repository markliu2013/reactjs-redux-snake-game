import React from 'react';

const GridColNumsSelect = ({options, value, onChange}) => (
    <div className="gridColNumsSelect">
        <select value={value} onChange={e => onChange(e.target.value)}>
            {options.map((option, i) => (
                <option value={option} key={i}>
                    {option}
                </option>
            ))}
        </select>
        <span>Columns</span>
    </div>
);

export default GridColNumsSelect;