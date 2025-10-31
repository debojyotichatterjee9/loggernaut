# Loggernaut

A flexible logging utility for Node.js with TypeScript support.

## Requirements
* Node.js: The original package is designed for Node.js environments

## Installation

```bash
npm install loggernaut
```

## Quick Start

### JavaScript Usage
```javascript
const logger = require('loggernaut');

logger.info('Hello World');
logger.error('Something went wrong');

// Custom logger
const { Loggernaut } = require('loggernaut');
const customLogger = new Loggernaut({ dwarf: true });
customLogger.debug('Custom logger');
```

### TypeScript Usage
```typescript
import logger, { Loggernaut, LoggernautConfig } from 'loggernaut';

// Default instance
logger.info('Hello World');
logger.error('Something went wrong');

// Custom logger with type safety
const config: LoggernautConfig = {
    dwarf: false,
    prefix: true,
    customPrefix: 'MY-APP',
    dateTimeFormat: 'YYYY-MM-DD HH:mm:ss'
};

const customLogger = new Loggernaut(config);
customLogger.debug('Custom typed logger');
```

### Creating Custom Logger Instances
```typescript
import { Loggernaut } from 'loggernaut';

// Custom configuration
const apiLogger = new Loggernaut({
    dwarf: false,
    prefix: true,
    customPrefix: 'API',
    dateTimeFormat: 'HH:mm:ss',
    dateTime: true
});

const dbLogger = new Loggernaut({
    dwarf: true,
    customPrefix: 'DATABASE',
    dateTime: false
});

apiLogger.info('API request received');
dbLogger.debug('Database query executed');
```

### Configuration Options

| Option | Type | Default | Description |
| --- | ---: | --- | --- |
| dwarf | boolean | false | Enable compact output mode without colors |
| prefix | boolean | true | Show/hide prefix in log messages |
| customPrefix | string | "LOGGERNAUT" | Custom text for log prefixes |
| dateTimeFormat | string | "DD-MM-YYYY HH:mm:ss" | DateTime formatting pattern |
| dateTime | boolean | true | Enable/disable timestamps in logs |

### DateTime Format Patterns
* YYYY - 4-digit year (2024)
* MM - 2-digit month (01-12)
* DD - 2-digit day (01-31)
* HH - 2-digit hour (00-23)
* mm - 2-digit minutes (00-59)
* ss - 2-digit seconds (00-59)

#### Methods

* log(message: any) - Default log level
* info(message: any) - Informational messages
* debug(message: any) - Debug information
* warn(message: any) - Warning messages
* error(message: any) - Error messages
* trace(message: any) - Trace-level information

###Examples

#### Basic Application Logger
```typescript
import logger from 'loggernaut';

class Application {
    start() {
        logger.info('Starting application...');
        
        try {
            // Application logic
            logger.debug('Initializing modules');
            logger.info('Application started successfully');
        } catch (error) {
            logger.error('Failed to start application:', error);
        }
    }
}
```

#### Multiple Logger Instances
```typescript
import { Loggernaut } from 'loggernaut';

// Different loggers for different components
const httpLogger = new Loggernaut({
    customPrefix: 'HTTP',
    dateTimeFormat: 'HH:mm:ss'
});

const databaseLogger = new Loggernaut({
    customPrefix: 'DB',
    dwarf: true
});

const authLogger = new Loggernaut({
    customPrefix: 'AUTH',
    dateTimeFormat: 'YYYY-MM-DD HH:mm:ss'
});

httpLogger.info('GET /api/users 200');
databaseLogger.debug('Query: SELECT * FROM users');
authLogger.warn('Failed login attempt');
```

#### Production vs Development Configuration
```typescript
import { Loggernaut } from 'loggernaut';

const isProduction = process.env.NODE_ENV === 'production';

const logger = new Loggernaut({
    dwarf: isProduction, // Compact logs in production
    dateTime: !isProduction, // No timestamps in production for performance
    prefix: true,
    customPrefix: isProduction ? 'APP' : 'DEV-APP'
});
```

### TypeScript Support

This package includes built-in TypeScript definitions. No need to install `@types/loggernaut`.

## Contributing

You're welcome contributions! Please feel free to submit issues and pull requests.

1. Fork the repository
2. Create a feature branch (git checkout -b feature/improvement)
3. Commit your changes (git commit -am 'Add new feature')
4. Push to the branch (git push origin feature/improvement)
5. Create a Pull Request

### Support

📖 [Documentation](https://github.com/debojyotichatterjee9/loggernaut#readme)

🐛 [Report Issues](https://github.com/debojyotichatterjee9/loggernaut/issues)

💡 [Request Features](https://github.com/debojyotichatterjee9/loggernaut/issues)

### License

This project is licensed under the MIT License - see the [LICENSE](https://license/) file for details.

### Related Links

[Original loggernaut package](https://www.npmjs.com/package/loggernaut)

[GitHub Repository](https://github.com/debojyotichatterjee9/loggernaut)

[TypeScript Documentation](https://www.typescriptlang.org/)

