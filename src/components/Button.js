import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ value, onClick, isDisabled }) {
    return(
        <button type="button" disabled={isDisabled} onClick={onClick} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm py-3 px-2 w-36 ml-6">
            {value}
        </button>
    )
}

Button.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isDisabled: PropTypes.bool
}