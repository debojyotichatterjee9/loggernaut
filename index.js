// console.clear()
const pc = require("picocolors");
const formatDateTime = require("./utils/dateTImeFormatter")

class Loggernaut {
  constructor(config = {}) {
    this.dwarf = config.dwarf ?? false;
    this.prefix = config.prefix ?? true;
    this.customMessage = config.customMessage || "LOGGERNAUT";
    this.dateTime = config.dateTimeFormat ?? false;
    this.dateTimeFormat = config.dateTimeFormat ?? "DD-MM-YYYY HH:mm:ss";
  }

  getCurrentTimestamp() {
    const date = new Date();
    return formatDateTime(date, this.dateTimeFormat);
  }

  log(message, customMessage = this.customMessage) {
    if (this.dwarf) {
      console.log(`${this.prefix ? customMessage + ":" : ""}${message}`);
    } else {
      console.log(`${this.prefix ? customMessage + "-->" : ""}${message}`);
    }
  }

  info(message) {
    console.log(
      `${
        this.prefix ? pc.bgCyan(pc.black("INFO")) + "-->" : ""
      }${this.getCurrentTimestamp()} --> ${message}`
    );
  }

  debug(message) {
    console.log(
      `${
        this.prefix ? pc.inverse("DEBUG") + "-->" : ""
      }${this.getCurrentTimestamp()} --> ${message}`
    );
  }

  warn(message) {
    console.log(
      `${
        this.prefix ? pc.bgYellow(pc.black("WARN")) + "-->" : ""
      }${this.getCurrentTimestamp()} --> ${message}`
    );
  }

  error(message) {
    console.log(
      `${
        this.prefix ? pc.bgRed(pc.white("ERROR")) + "-->" : ""
      }${this.getCurrentTimestamp()} --> ${message}`
    );
  }

  trace(message) {
    console.log(
      `${
        this.prefix ? pc.bgGreen(pc.white("TRACE")) + "-->" : ""
      }${this.getCurrentTimestamp()} --> ${message}`
    );
  }
}

module.exports = Loggernaut;
