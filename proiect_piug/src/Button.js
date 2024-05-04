import React from 'react';

// Define a functional component for the button
const Button = ({ onClick, children, className}) => {
    return (
        <a className={className} href={onClick}>
            {children}
        </a>
    );
};

export default Button;
