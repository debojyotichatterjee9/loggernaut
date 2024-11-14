const LOGGERNAUT = require("../constants/commonConstants");
const STYLEIT = require("./styleFormatter");
const formatDateTime = require("./dateTImeFormatter");
const getStringifiedValue = require("./messageStringifier");
const getCurrentTimestamp = (dateTimeFormat) => {
  const date = new Date();
  return formatDateTime(date, dateTimeFormat);
};

module.exports = messageFormatter = (config, message, type) => {
  const timeStamp = config.dateTime
    ? getCurrentTimestamp(config.dateTimeFormat)
    : null;
  const strigifiedMessage = getStringifiedValue(message);
  if (type === LOGGERNAUT.INFO) {
    if (config.dwarf) {
      return `${config.prefix ? LOGGERNAUT.DWARF_INFO + ":" : ""}${
        timeStamp ? timeStamp + ":" : ""
      }${strigifiedMessage}`;
    }
    return `${
      config.prefix
        ? STYLEIT.BGCYAN(STYLEIT.BLACK(LOGGERNAUT.INFO)) +
          ":" +
          LOGGERNAUT.TABSPACE
        : ""
    }${
      timeStamp ? `[${timeStamp}]` + ":" + LOGGERNAUT.TABSPACE : ""
    }${strigifiedMessage}`;
  }
  if (type === LOGGERNAUT.DEBUG) {
    if (config.dwarf) {
      return `${config.prefix ? LOGGERNAUT.DWARF_DEBUG + ":" : ""}${
        timeStamp ? timeStamp + ":" : ""
      }${strigifiedMessage}`;
    }
    return `${
      config.prefix
        ? STYLEIT.INVERSE(LOGGERNAUT.DEBUG) + ":" + LOGGERNAUT.TABSPACE
        : ""
    }${
      timeStamp ? `[${timeStamp}]` + ":" + LOGGERNAUT.TABSPACE : ""
    }${strigifiedMessage}`;
  }
  if (type === LOGGERNAUT.WARN) {
    if (config.dwarf) {
      return `${config.prefix ? LOGGERNAUT.DWARF_WARN + ":" : ""}${
        timeStamp ? timeStamp + ":" : ""
      }${strigifiedMessage}`;
    }
    return `${
      config.prefix
        ? STYLEIT.BGYELLOW(STYLEIT.BLACK(LOGGERNAUT.WARN)) +
          ":" +
          LOGGERNAUT.TABSPACE
        : ""
    }${
      timeStamp ? `[${timeStamp}]` + ":" + LOGGERNAUT.TABSPACE : ""
    }${strigifiedMessage}`;
  }
  if (type === LOGGERNAUT.ERROR) {
    if (config.dwarf) {
      return `${config.prefix ? LOGGERNAUT.DWARF_ERROR + ":" : ""}${
        timeStamp ? timeStamp + ":" : ""
      }${strigifiedMessage}`;
    }
    return `${
      config.prefix
        ? STYLEIT.BGRED(STYLEIT.WHITE(LOGGERNAUT.ERROR)) +
          ":" +
          LOGGERNAUT.TABSPACE
        : ""
    }${
      timeStamp ? `[${timeStamp}]` + ":" + LOGGERNAUT.TABSPACE : ""
    }${strigifiedMessage}`;
  }
  if (type === LOGGERNAUT.TRACE) {
    if (config.dwarf) {
      return `${config.prefix ? LOGGERNAUT.DWARF_TRACE + ":" : ""}${
        timeStamp ? timeStamp + ":" : ""
      }${strigifiedMessage}`;
    }
    return `${
      config.prefix
        ? STYLEIT.BGGREEN(STYLEIT.WHITE(LOGGERNAUT.TRACE)) +
          ":" +
          LOGGERNAUT.TABSPACE
        : ""
    }${
      timeStamp ? `[${timeStamp}]` + ":" + LOGGERNAUT.TABSPACE : ""
    }${strigifiedMessage}`;
  } else {
    if (config.dwarf) {
      return `${
        config.prefix ? "[" + config.customPrefix + "]" + ":" : ""
      }${strigifiedMessage}`;
    }
    return `${
      config.prefix
        ? "[**" + config.customPrefix + "**]" + ":" + LOGGERNAUT.TABSPACE
        : ""
    }${strigifiedMessage}`;
  }
};
