import logger, { Loggernaut, LoggernautConfig } from '../index';

// Test 1: Default instance functionality
console.log('=== Testing Default Instance ===');
logger.info('Info message with default logger');
logger.debug('Debug message with default logger');
logger.warn('Warning message with default logger');
logger.error('Error message with default logger');
logger.trace('Trace message with default logger');
logger.log('Generic log message');

// Test 2: Different data types
console.log('\n=== Testing Different Data Types ===');
logger.info('String message');
logger.info(42);
logger.info(true);
logger.info(null);
logger.info(undefined);
logger.info([1, 2, 3]);
logger.info({ key: 'value', number: 123 });
logger.info(new Date());
logger.info(new Error('Test error'));

// Test 3: Custom logger instances
console.log('\n=== Testing Custom Logger Instances ===');

const config1: LoggernautConfig = {
    dwarf: false,
    prefix: true,
    customPrefix: 'CUSTOM-APP',
    dateTimeFormat: 'HH:mm:ss',
    dateTime: true
};

const config2: LoggernautConfig = {
    dwarf: true,
    prefix: true,
    customPrefix: 'DWARF-APP',
    dateTime: false
};

const customLogger1 = new Loggernaut(config1);
const customLogger2 = new Loggernaut(config2);

customLogger1.info('Custom logger with timestamp');
customLogger2.debug('Dwarf mode logger - compact output');

// Test 4: Type safety and configuration
console.log('\n=== Testing Type Safety ===');

// This should show TypeScript errors if uncommented (testing type safety)
// const invalidConfig: LoggernautConfig = {
//     invalidProperty: true // This should cause TypeScript error
// };

const minimalConfig: LoggernautConfig = {
    dwarf: true
};

const minimalLogger = new Loggernaut(minimalConfig);
minimalLogger.info('Minimal configuration test');

// Test 5: Complex objects and error handling
console.log('\n=== Testing Complex Objects ===');
const complexObject = {
    user: {
        id: 123,
        name: 'John Doe',
        email: 'john@example.com'
    },
    actions: ['login', 'view', 'logout'],
    metadata: {
        timestamp: new Date(),
        version: '1.0.0'
    }
};

logger.debug('Complex object:', complexObject);
logger.error('Error with context:', {
    error: new Error('Database connection failed'),
    query: 'SELECT * FROM users',
    timestamp: new Date()
});

console.log('\n✅ All TypeScript tests completed successfully!');
console.log('✅ Type definitions are working correctly!');