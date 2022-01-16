import React from 'react';

import './custom-button.scss'

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
    <button {...otherProps}
            className={`${inverted ? 'inverted ' : ''}${isGoogleSignIn ? 'google-sign-in ' : ''}custom-button`}>
        {children}
    </button>
)

export default CustomButton;
