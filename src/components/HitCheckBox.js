import React from 'react';

const HitCheckBox = ({value, onChange}) => (
    <div>
        <label>
            Can Hit Self:
            <input
                type="checkbox"
                checked={value}
                onChange={e => {onChange(e.target.checked)}} />
        </label>
    </div>
);

export default HitCheckBox;