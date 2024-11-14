# Loggernaut

Loggernaut is a customizable logger package for Node.js that supports various log levels, custom message prefixes, and configurable timestamps without any external dependencies.

## Installation

```sh
npm install loggernaut
```

## Usage/Examples

### Default Configuration

To use Loggernaut with the default configuration, you can simply require it and start logging:

```js
const loggernaut = require('loggernaut');

loggernaut.log("This is a generic log.");
loggernaut.info("This is an info log.");
loggernaut.debug("This is a debug log.");
loggernaut.warn("This is a warn log.");
loggernaut.error("This is an error log.");
loggernaut.trace("This is a trace log.");
```

### Custom Configuration

You can also create an instance of Loggernaut with your own configurations:

```js
const { Loggernaut } = require('loggernaut');
const loggernaut = new Loggernaut({
  dwarf: true,
    prefix: true,
    customPrefix: "MYLOGGER",
    dateTime: true,
    dateTimeFormat: 'DD-MM-YYYY HH:mm:ss'
});

loggernaut.log("This is a generic log.");
loggernaut.info("This is an info log.");
loggernaut.debug("This is a debug log.");
loggernaut.warn("This is a warn log.");
loggernaut.error("This is an error log.");
loggernaut.trace("This is a trace log.");
```

## Configuration Options

Loggernaut accepts the following configuration options:

- `dwarf` (boolean): Shortens the message logs and removes colors. Default is `false`.
- `prefix` (boolean): Determines if a custom message prefix should be used. Default is `true`.
- `customMessage` (string): The custom message prefix for generic  `loggernaut.log()`. Default is `"LOGGERNAUT"`. 
- `dateTime` (boolean): Determines if the current timestamp should be included in the log messages. Default is `true`.
- `dateTimeFormat` (string): Determines the format for the timestamp. Default is `"DD-MM-YYYY HH:mm:ss"`.

## Methods

Loggernaut supports the following methods:

- `log(message)`: Logs a general message.
- `info(message)`: Logs an info message in cyan color flag at the start.
- `debug(message)`: Logs a debug message without any color.
- `warn(message)`: Logs a warning message in orange color flag at the start.
- `error(message)`: Logs an error message in red color flag at the start.
- `trace(message)`: Logs a trace message without any color flag at the start.

## Upcoming

Ability to log messages in colors should be available in future version.

## License

This project is licensed under the MIT License.
