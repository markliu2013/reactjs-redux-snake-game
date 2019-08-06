import React from 'react';

const GridColNumsSelect = ({options, value, onChange}) => (
    <div className="gridColNumsSelect">
        <label>
            Grid Columns:
            <select value={value} onChange={e => onChange(e.target.value)}>
                {options.map((option, i) => (
                    <option value={option} key={i}>
                        {option}
                    </option>
                ))}
            </select>
        </label>
    </div>
);

export default GridColNumsSelect;