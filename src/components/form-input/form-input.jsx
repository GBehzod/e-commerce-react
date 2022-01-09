import React from 'react';

import './form-input.scss'

const FormInput = ({handleChange, label, ...props}) => (
    <div className="form-group">
        <input
            className="form-input"
            onChange={handleChange}/>

        {label ? <label className={`${props.value.length ? 'shrink' : ''} form-input-label`}>{label}</label> : null}
    </div>
)

export default FormInput;
