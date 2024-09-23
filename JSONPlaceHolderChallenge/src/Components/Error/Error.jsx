import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
    return (
        <div className="flex items-center justify-center h-full bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="text-2xl text-gray-600 mt-4">Page Not Found</p>
                <Link to="/1" className="mt-6 inline-block px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 duration-300">
                    Go Home
                </Link>
            </div>
        </div>
    )
}

export default Error