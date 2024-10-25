// logger.js

class Loggernaut {
  constructor(config = {}) {
    this.timestampFormat = config.timestampFormat || 'DD-MM-YYYY HH:mm:ss';
  }

  getCurrentTimestamp() {
    const date = new Date();
    return this.formatDate(date, this.timestampFormat);
  }

  formatDate(date, format) {
    const map = {
      'YYYY': date.getFullYear(),
      'MM': ('0' + (date.getMonth() + 1)).slice(-2),
      'DD': ('0' + date.getDate()).slice(-2),
      'HH': ('0' + date.getHours()).slice(-2),
      'mm': ('0' + date.getMinutes()).slice(-2),
      'ss': ('0' + date.getSeconds()).slice(-2),
    };

    return format.replace(/YYYY|MM|DD|HH|mm|ss/gi, matched => map[matched]);
  }

  log(message, customMessage = 'LOGGERNAUT') {
    console.log(`${customMessage ? customMessage + '-->' : ''}${message}`);
  }

  info(message) {
    console.log(`%cINFO --> ${this.getCurrentTimestamp()} --> ${message}`, 'color: cyan');
  }

  debug(message) {
    console.log(`DEBUG --> ${this.getCurrentTimestamp()} --> ${message}`);
  }

  warn(message) {
    console.log(`%cWARN --> ${this.getCurrentTimestamp()} --> ${message}`, 'color: orange');
  }

  error(message) {
    console.log(`%cERROR --> ${this.getCurrentTimestamp()} --> ${message}`, 'color: red');
  }

  trace(message) {
    console.log(`TRACE --> ${this.getCurrentTimestamp()} --> ${message}`);
  }
}

module.exports = Loggernaut;