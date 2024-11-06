// console.clear()
const pc = require("./utils/styleFormatter");
const formatDateTime = require("./utils/dateTImeFormatter");
const messageFormatter = require("./utils/messageFormatter");
const LOGGERNAUT = require("./constants/commonConstants");

class Loggernaut {
  constructor(config = {}) {
    this.dwarf = config.dwarf ?? false;
    this.prefix = config.prefix ?? true;
    this.customMessage = config.customMessage || "LOGGERNAUT";
    this.dateTimeFormat = config.dateTimeFormat ?? "DD-MM-YYYY HH:mm:ss";
    this.dateTime = config.dateTime ?? true;
  }

  getCurrentTimestamp() {
    const date = new Date();
    return formatDateTime(date, this.dateTimeFormat);
  }

  log(message) {
    console.log(messageFormatter(this, message));
  }

  info(message) {
    console.log(messageFormatter(this, message, LOGGERNAUT.INFO));
  }

  debug(message) {
    console.log(messageFormatter(this, message, LOGGERNAUT.DEBUG));
  }

  warn(message) {
    console.log(messageFormatter(this, message, LOGGERNAUT.WARN));
  }

  error(message) {
    console.log(messageFormatter(this, message, LOGGERNAUT.ERROR));
  }

  trace(message) {
    console.log(messageFormatter(this, message, LOGGERNAUT.TRACE));
  }
}

module.exports = Loggernaut;
