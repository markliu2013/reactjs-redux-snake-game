import React from 'react';

const GridColNumsSelect = ({options, value, innerRef}) => (
    <div className="gridColNumsSelect">
        <select defaultValue={value} ref={innerRef}>
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