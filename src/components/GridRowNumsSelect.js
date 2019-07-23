import React from 'react';

const GridRowNumsSelect = ({options, value, innerRef}) => (
    <div className="gridRowNumsSelect">
        <select defaultValue={value} ref={innerRef}>
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