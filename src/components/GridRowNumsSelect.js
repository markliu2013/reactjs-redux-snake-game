import React from 'react';

const GridRowNumsSelect = ({options, value, onChange}) => (
    <div className="gridRowNumsSelect">
        <label>
            Grid Rows:
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

export default GridRowNumsSelect;