import React from 'react';

const GridRowNumsSelect = ({options, value}) => (
    <div className="gridRowNumsSelect">
        <select defaultValue={value}>
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