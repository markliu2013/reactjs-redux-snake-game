import React from 'react';

const GridRowNumsSelect = ({options, value, onChange}) => (
    <div className="gridRowNumsSelect">
        <select value={value} onChange={e => onChange(e.target.value)}>
            {options.map((option, i) => (
                <option value={option} key={i}>
                    {option}
                </option>
            ))}
        </select>
        <span>Rows</span>
    </div>
);

export default GridRowNumsSelect;