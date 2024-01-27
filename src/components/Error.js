import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Error({ status, message, url }) {
    return <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
        <div className="rounded-lg bg-white p-8 text-center shadow-xl">
            <h1 className="mb-4 text-4xl font-bold">{status}</h1>
            <p className="text-gray-600">{message}</p>
            <Link to={url} className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"> Go back to Home </Link>
        </div>
    </div>
}

Error.propTypes = {
    status: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}