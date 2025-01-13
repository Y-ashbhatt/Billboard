import React, { useEffect } from "react";

const PopupNotification = ({ message, onClose, duration = 4500 }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [onClose, duration]);

    return (
        <div className="fixed bottom-4 right-8 text-sm  bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg z-50">
            {message}
        </div>
    );
};

export default PopupNotification;
