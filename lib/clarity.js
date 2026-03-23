/* eslint-disable */

/**
 * Fire a Microsoft Clarity custom event.
 * @param {string} eventName - The name of the event to log in Clarity.
 */
export const trackEvent = (eventName) => {
    if (typeof window !== "undefined" && typeof window.clarity === "function") {
        window.clarity("event", eventName);
    }
};

/**
 * Tag the current Clarity session with a key/value pair.
 * @param {string} key
 * @param {string} value
 */
export const setTag = (key, value) => {
    if (typeof window !== "undefined" && typeof window.clarity === "function") {
        window.clarity("set", key, value);
    }
};
