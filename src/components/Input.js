import React from 'react';
import PropTypes from 'prop-types';

export default function Input ({type, placeholder, onChange}) {
    return <input type={type} onChange={(e) => onChange(e.target.value)} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder}/>
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func
}