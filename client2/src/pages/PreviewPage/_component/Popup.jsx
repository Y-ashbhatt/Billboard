import React from 'react';

const Popup = ({ data, onClose }) => {
    return (
        <>
            {/* Popup Content */}
            <div
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-50 w-11/12 max-w-md"
            >
                <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                    Action Details
                </h3>

                {data.actionType === 'whatsapp' && (
                    <p className="text-gray-600 text-base mb-2">
                        <span className="font-medium text-blue-500">WhatsApp:</span> {data.whatsappnumber}
                    </p>
                )}
                {data.actionType === 'product' && (
                    <>
                        <p className="text-gray-600 text-base mb-2">
                            <span className="font-medium text-blue-500">Title:</span> {data.title}
                        </p>
                        <p className="text-gray-600 text-base mb-2">
                            <span className="font-medium text-blue-500">URL:</span>{" "}
                            <a
                                href={data.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline hover:text-blue-700"
                            >
                                {data.link}
                            </a>
                        </p>
                        <p className="text-gray-600 text-base mb-2">
                            <span className="font-medium text-blue-500">Description:</span> {data.description}
                        </p>
                    </>
                )}
                {data.actionType === 'mail' && (
                    <p className="text-gray-600 text-base mb-2">
                        <span className="font-medium text-blue-500">Email Address:</span> {data.mail}
                    </p>
                )}
                {data.actionType === 'customhtml' && (
                    <p className="text-gray-600 text-base mb-2">
                        <span className="font-medium text-blue-500">Custom HTML Code:</span> {data.customhtml}
                    </p>
                )}
                {data.actionType === 'optionform' && (
                    <p className="text-gray-600 text-base mb-2">
                        <span className="font-medium text-blue-500">Option Form:</span> {data.textFormat}
                    </p>
                )}

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                    Close
                </button>
            </div>

            {/* Overlay */}
            <div
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
                onClick={onClose}
            />
        </>
    );
};

export default Popup;
