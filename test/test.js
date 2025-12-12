const logger = require('../index');

console.log('=== JavaScript Compatibility Tests ===');

// Test default instance
logger.info('JavaScript: Info message');
logger.debug('JavaScript: Debug message');
logger.warn('JavaScript: Warn message');
logger.error('JavaScript: Error message');
logger.trace('JavaScript: Trace message');
logger.log('JavaScript: Log message');

// Test custom instance
const { Loggernaut } = require('../index');
const customLogger = new Loggernaut({ dwarf: true, customPrefix: 'JS-TEST' });
customLogger.info('JavaScript custom logger works!');

console.log('✅ JavaScript tests completed successfully!');