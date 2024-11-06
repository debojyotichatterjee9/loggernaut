const LOGGERNAUT = require("../constants/commonConstants");
const STYLEIT = require("./styleFormatter");
const formatDateTime = require("./dateTImeFormatter");

const getCurrentTimestamp = (dateTimeFormat) => {
  const date = new Date();
  return formatDateTime(date, dateTimeFormat);
};

module.exports = messageFormatter = (config, message, type) => {
  const timeStamp = config.dateTime ? getCurrentTimestamp(config.dateTimeFormat) : null;
  if (type === LOGGERNAUT.INFO) {
    if (config.dwarf) {
      return `${
        config.prefix
          ? LOGGERNAUT.INFO + ":"
          : ""
      }${timeStamp ? timeStamp + ":" : ""}${message}`;
    }
    return `${
      config.prefix
        ? STYLEIT.BGCYAN(STYLEIT.BLACK(LOGGERNAUT.INFO)) + "-->"
        : ""
    }${timeStamp ? timeStamp + "-->" : ""}${message}`;
  }
  if (type === LOGGERNAUT.DEBUG) {
    if (config.dwarf) {
      return `${
        config.prefix
          ? LOGGERNAUT.DEBUG + ":"
          : ""
      }${timeStamp ? timeStamp + ":" : ""}${message}`;
    }
    return `${
      config.prefix ? STYLEIT.INVERSE(LOGGERNAUT.DEBUG) + "-->" : ""
    }${timeStamp ? timeStamp + "-->" : ""}${message}`;
  }
  if (type === LOGGERNAUT.WARN) {
    if (config.dwarf) {
      return `${
        config.prefix
          ? LOGGERNAUT.WARN + ":"
          : ""
      }${timeStamp ? timeStamp + ":" : ""}${message}`;
    }
    return `${
      config.prefix
        ? STYLEIT.BGYELLOW(STYLEIT.BLACK(LOGGERNAUT.WARN)) + "-->"
        : ""
    }${timeStamp ? timeStamp + "-->" : ""}${message}`;
  }
  if (type === LOGGERNAUT.ERROR) {
    if (config.dwarf) {
      return `${
        config.prefix
          ? LOGGERNAUT.ERROR + ":"
          : ""
      }${timeStamp ? timeStamp + ":" : ""}${message}`;
    }
    return `${
      config.prefix ? STYLEIT.BGRED(STYLEIT.WHITE("ERROR")) + "-->" : ""
    }${timeStamp ? timeStamp + "-->" : ""}${message}`;
  }
  if (type === LOGGERNAUT.TRACE) {
    if (config.dwarf) {
      return `${
        config.prefix
          ? LOGGERNAUT.TRACE + ":"
          : ""
      }${timeStamp ? timeStamp + ":" : ""}${message}`;
    }
    return `${
      config.prefix ? STYLEIT.BGGREEN(STYLEIT.WHITE("TRACE")) + "-->" : ""
    }${timeStamp ? timeStamp + "-->" : ""}${message}`;
  } else {
    if (config.dwarf) {
      return `${config.prefix ? config.customMessage + ":" : ""}${message}`;
    }
    return `${config.prefix ? config.customMessage + "-->" : ""}${message}`;
  }
};
