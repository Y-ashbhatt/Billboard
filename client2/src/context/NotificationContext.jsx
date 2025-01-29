import React, { createContext, useContext, useState } from "react";
import PopupNotification from "../components/PopupNotification";

const NotificationContext = createContext();

export const useNotification = () => {
    return useContext(NotificationContext);
}

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState("");

    const showNotification = (msg) => {
        setMessage(msg);
        setTimeout(() => setMessage(""), 4500); 
    };

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {children}
            {message && <PopupNotification message={message} />}
        </NotificationContext.Provider>
    );
};
