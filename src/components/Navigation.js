import React from 'react';
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
    const location = useLocation()
    return (
        <ul className="my-8 w-1/2 p-1 text-sm font-medium text-center text-gray-500 bg-gray-100 gap-1 rounded-lg shadow flex">
            <li className="w-1/2">
                <Link
                    to="/"
                    className={`inline-block w-full p-2 hover:text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none ${location.pathname === "/" ? "bg-white text-gray-900" : ""}`}
                >
                    Word Input
                </Link>
            </li>
            <li className="w-1/2">
                <Link
                    to="/paragraph"
                    className={`inline-block w-full p-2 hover:text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none ${location.pathname === "/paragraph" ? "bg-white text-gray-900" : ""}`}
                >
                    Paragraph
                </Link>
            </li>
        </ul>
    )
}