import React from 'react';

import './custom-button.styles.scss';

const CustomButtom = ({ children, inverted ,isGoogleSignIn, ...otherProps }) => (
    <button className={`${inverted ? 'inverted': ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButtom;
