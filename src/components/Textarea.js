import React from 'react';
import PropTypes from 'prop-types';

export default function Textarea ({rows, placeholder, onChange}) {
    return <textarea onChange={(e) => onChange(e.target.value)} rows={rows} className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder={placeholder}></textarea>
}

Textarea.propTypes = {
    rows: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func
}
