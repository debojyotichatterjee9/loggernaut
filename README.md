# Loggernaut

Loggernaut is a customizable logger package for Node.js that supports various log levels, custom message prefixes, and configurable timestamps without any external dependencies.

## Installation

```sh
npm install loggernaut
```

## Usage

### Default Configuration

To use Loggernaut with the default configuration, you can simply require it and start logging:

```js
const loggernaut = require('loggernaut');

loggernaut.log("This is a log line");
loggernaut.info("This is an info line");
loggernaut.debug("This is a debug line");
loggernaut.warn("This is a warn line");
loggernaut.error(new Error("This is an error"));
loggernaut.trace("This is a trace line");
```

### Custom Configuration

You can also create an instance of Loggernaut with your own configurations:

```js
const { Loggernaut } = require('loggernaut');
const customLogger = new Loggernaut({
  dwarf: true,
  prefix: true,
  dateTime: false,
  dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
  customMessage: 'MYLOGGER'
});

customLogger.log("This is a custom log line");
customLogger.info("This is a custom info line");
customLogger.debug("This is a custom debug line");
customLogger.warn("This is a custom warn line");
customLogger.error(new Error("This is a custom error"));
customLogger.trace("This is a custom trace line");
```

## Configuration Options

Loggernaut accepts the following configuration options:

- `dwarf` (boolean): Default is `false`. Custom configuration option (not utilized in current implementation).
- `prefix` (boolean): Default is `true`. Determines if a custom message prefix should be used.
- `customMessage` (string): Default is `"LOGGERNAUT"`. The custom message prefix.
- `dateTime` (boolean): Default is `true`. Determines if the current timestamp should be included in the log messages.
- `dateTimeFormat` (string): Default is `"DD-MM-YYYY HH:mm:ss"`. The format for the timestamp.

## Methods

Loggernaut supports the following methods:

- `log(message)`: Logs a general message.
- `info(message)`: Logs an info message in cyan color.
- `debug(message)`: Logs a debug message without any color.
- `warn(message)`: Logs a warning message in orange color.
- `error(message)`: Logs an error message in red color.
- `trace(message)`: Logs a trace message without any color.

## Examples

### Default Logging

```js
const loggernaut = require('loggernaut');

loggernaut.log("This is a log line");
loggernaut.info("This is an info line");
loggernaut.debug("This is a debug line");
loggernaut.warn("This is a warn line");
loggernaut.error(new Error("This is an error"));
loggernaut.trace("This is a trace line");
```

### Custom Logging

```js
const { Loggernaut } = require('loggernaut');
const customLogger = new Loggernaut({
  dwarf: true,
  prefix: true,
  dateTime: false,
  dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
  customMessage: 'MYLOGGER'
});

customLogger.log("This is a custom log line");
customLogger.info("This is a custom info line");
customLogger.debug("This is a custom debug line");
customLogger.warn("This is a custom warn line");
customLogger.error(new Error("This is a custom error"));
customLogger.trace("This is a custom trace line");
```

## License

This project is licensed under the MIT License.
