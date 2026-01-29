/**
 * Simple Logger utility for tracking application state and debugging.
 */
const logger = {
  info: (message, data = null) => {
    if (import.meta.env.DEV) {
      console.info(`[INFO] ${new Date().toLocaleTimeString()} - ${message}`, data || "");
    }
  },
  warn: (message, data = null) => {
    if (import.meta.env.DEV) {
      console.warn(`[WARN] ${new Date().toLocaleTimeString()} - ${message}`, data || "");
    }
  },
  error: (message, error = null) => {
    // Error logs might be useful even in production (or sent to a service)
    console.error(`[ERROR] ${new Date().toLocaleTimeString()} - ${message}`, error || "");
  },
  debug: (message, data = null) => {
    if (import.meta.env.DEV) {
      console.debug(`[DEBUG] ${new Date().toLocaleTimeString()} - ${message}`, data || "");
    }
  }
};

export default logger;
