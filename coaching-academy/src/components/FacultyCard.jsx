import React from 'react';

const FacultyCard = ({ name, subject, experience, image }) => {
    return (
        <div className="card text-center">
            <div className="mb-4">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center text-white text-4xl font-bold">
                    {image ? (
                        <img src={image} alt={name} className="w-full h-full rounded-full object-cover" />
                    ) : (
                        name.charAt(0)
                    )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
                <p className="text-primary-600 font-semibold mb-2">{subject}</p>
                <p className="text-gray-600 text-sm">{experience}</p>
            </div>
        </div>
    );
};

export default FacultyCard;
