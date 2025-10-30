// Type definitions for loggernaut 1.0
// Project: https://github.com/your-username/loggernaut
// Definitions by: Your Name <https://github.com/your-username>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Loggernaut - A flexible logging utility for Node.js
 */

/** Loggernaut configuration options */
interface LoggernautConfig {
    /**
     * Enable dwarf mode (compact output)
     * @default false
     */
    dwarf?: boolean;

    /**
     * Enable prefix in log messages
     * @default true
     */
    prefix?: boolean;

    /**
     * Custom prefix for log messages
     * @default "LOGGERNAUT"
     */
    customPrefix?: string;

    /**
     * DateTime format string
     * @default "DD-MM-YYYY HH:mm:ss"
     */
    dateTimeFormat?: string;

    /**
     * Enable timestamp in log messages
     * @default true
     */
    dateTime?: boolean;
}

/**
 * Main Loggernaut class for creating logger instances
 */
declare class Loggernaut {
    constructor(config?: LoggernautConfig);

    /**
     * Default log method
     * @param message - The message to log (any type)
     */
    log(message: any): void;

    /**
     * Info level logging
     * @param message - The message to log (any type)
     */
    info(message: any): void;

    /**
     * Debug level logging
     * @param message - The message to log (any type)
     */
    debug(message: any): void;

    /**
     * Warn level logging
     * @param message - The message to log (any type)
     */
    warn(message: any): void;

    /**
     * Error level logging
     * @param message - The message to log (any type)
     */
    error(message: any): void;

    /**
     * Trace level logging
     * @param message - The message to log (any type)
     */
    trace(message: any): void;
}

/**
 * Default Loggernaut instance
 */
declare const defaultLoggernaut: Loggernaut;

export = defaultLoggernaut;
export { Loggernaut, LoggernautConfig };