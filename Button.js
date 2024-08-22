import React from 'react';

const Button = ({ value, onClick }) => {
    return (
        <button onClick={onClick} className="button">
            {value}
        </button>
    );
};

export default Button;