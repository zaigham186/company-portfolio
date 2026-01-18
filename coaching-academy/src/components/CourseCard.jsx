import React from 'react';

const CourseCard = ({ title, description, duration, mode, batch }) => {
    return (
        <div className="card hover:scale-105 transition-transform duration-300">
            <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>

            <div className="space-y-2 mb-4">
                {duration && (
                    <div className="flex items-center text-sm text-gray-700">
                        <span className="font-semibold mr-2">⏱️ Duration:</span>
                        <span>{duration}</span>
                    </div>
                )}
                {mode && (
                    <div className="flex items-center text-sm text-gray-700">
                        <span className="font-semibold mr-2">📚 Mode:</span>
                        <span>{mode}</span>
                    </div>
                )}
                {batch && (
                    <div className="flex items-center text-sm text-gray-700">
                        <span className="font-semibold mr-2">👥 Batch:</span>
                        <span>{batch}</span>
                    </div>
                )}
            </div>

            <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                Enroll Now
            </button>
        </div>
    );
};

export default CourseCard;
