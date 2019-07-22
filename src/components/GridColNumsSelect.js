import React from 'react';

const GridColNumsSelect = ({options, value}) => (
    <div className="gridColNumsSelect">
        <select defaultValue={value}>
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