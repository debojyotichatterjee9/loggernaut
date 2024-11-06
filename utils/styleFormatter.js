const ANSI_ESCAPE_CODE = require("../constants/formatterConstants");
const processEnv = process || {};
const { argv = [], env = {} } = processEnv;

const isColorSupported =
  !env.NO_COLOR &&
  (env.FORCE_COLOR ||
    argv.includes("--color") ||
    processEnv.platform === "win32" ||
    ((processEnv.stdout || {}).isTTY && env.TERM !== "dumb") ||
    env.CI);

const messageFormatter =
  (open, close, replace = open) =>
  (input) => {
    const string = String(input);
    const index = string.indexOf(close, open.length);
    return index !== -1
      ? `${open}${replaceAnsiTail(string, close, replace, index)}${close}`
      : `${open}${string}${close}`;
  };

const replaceAnsiTail = (string, close, replace, index) => {
  let result = "";
  let cursor = 0;
  while (index !== -1) {
    result += `${string.substring(cursor, index)}${replace}`;
    cursor = index + close.length;
    index = string.indexOf(close, cursor);
  }
  return result + string.substring(cursor);
};

const createFormatting = (enabled = isColorSupported) => {
  const format = enabled ? messageFormatter : () => String;
  return {
    isColorSupported: enabled,
    RESET: format(ANSI_ESCAPE_CODE.RESET_NORMAL, ANSI_ESCAPE_CODE.RESET_NORMAL),
    BOLD: format(
      ANSI_ESCAPE_CODE.BOLD,
      ANSI_ESCAPE_CODE.REMOVE_BOLD,
      `${ANSI_ESCAPE_CODE.REMOVE_BOLD}${ANSI_ESCAPE_CODE.BOLD}`
    ),
    DIM: format(
      ANSI_ESCAPE_CODE.DIM,
      ANSI_ESCAPE_CODE.REMOVE_BOLD,
      `${ANSI_ESCAPE_CODE.REMOVE_BOLD}${ANSI_ESCAPE_CODE.DIM}`
    ),
    ITALIC: format(ANSI_ESCAPE_CODE.ITALIC, ANSI_ESCAPE_CODE.REMOVE_ITALIC),
    UNDERLINE: format(
      ANSI_ESCAPE_CODE.UNDERLINE,
      ANSI_ESCAPE_CODE.REMOVE_UNDERLINE
    ),
    INVERSE: format(ANSI_ESCAPE_CODE.INVERSE, ANSI_ESCAPE_CODE.REMOVE_INVERSE),
    HIDDEN: format(ANSI_ESCAPE_CODE.HIDDEN, ANSI_ESCAPE_CODE.REMOVE_HIDDEN),
    STRIKETHROUGH: format(
      ANSI_ESCAPE_CODE.STRIKETHROUGH,
      ANSI_ESCAPE_CODE.REMOVE_STRIKETHROUGH
    ),

    BLACK: format(ANSI_ESCAPE_CODE.BLACK, ANSI_ESCAPE_CODE.REMOVE_COLOR),
    RED: format(ANSI_ESCAPE_CODE.RED, ANSI_ESCAPE_CODE.REMOVE_COLOR),
    GREEN: format(ANSI_ESCAPE_CODE.GREEN, ANSI_ESCAPE_CODE.REMOVE_COLOR),
    YELLOW: format(ANSI_ESCAPE_CODE.YELLOW, ANSI_ESCAPE_CODE.REMOVE_COLOR),
    BLUE: format(ANSI_ESCAPE_CODE.BLUE, ANSI_ESCAPE_CODE.REMOVE_COLOR),
    MAGENTA: format(ANSI_ESCAPE_CODE.MAGENTA, ANSI_ESCAPE_CODE.REMOVE_COLOR),
    CYAN: format(ANSI_ESCAPE_CODE.CYAN, ANSI_ESCAPE_CODE.REMOVE_COLOR),
    WHITE: format(ANSI_ESCAPE_CODE.WHITE, ANSI_ESCAPE_CODE.REMOVE_COLOR),
    GRAY: format(ANSI_ESCAPE_CODE.GRAY, ANSI_ESCAPE_CODE.REMOVE_COLOR),

    BGBLACK: format(ANSI_ESCAPE_CODE.BGBLACK, ANSI_ESCAPE_CODE.REMOVE_BGCOLOR),
    BGRED: format(ANSI_ESCAPE_CODE.BGRED, ANSI_ESCAPE_CODE.REMOVE_BGCOLOR),
    BGGREEN: format(ANSI_ESCAPE_CODE.BGGREEN, ANSI_ESCAPE_CODE.REMOVE_BGCOLOR),
    BGYELLOW: format(
      ANSI_ESCAPE_CODE.BGYELLOW,
      ANSI_ESCAPE_CODE.REMOVE_BGCOLOR
    ),
    BGBLUE: format(ANSI_ESCAPE_CODE.BGBLUE, ANSI_ESCAPE_CODE.REMOVE_BGCOLOR),
    BGMAGENTA: format(
      ANSI_ESCAPE_CODE.BGMAGENTA,
      ANSI_ESCAPE_CODE.REMOVE_BGCOLOR
    ),
    BGCYAN: format(ANSI_ESCAPE_CODE.BGCYAN, ANSI_ESCAPE_CODE.REMOVE_BGCOLOR),
    BGWHITE: format(ANSI_ESCAPE_CODE.BGWHITE, ANSI_ESCAPE_CODE.REMOVE_BGCOLOR),

    BLACKBRIGHT: format(
      ANSI_ESCAPE_CODE.BLACKBRIGHT,
      ANSI_ESCAPE_CODE.REMOVE_COLOR
    ),
    REDBRIGHT: format(
      ANSI_ESCAPE_CODE.REDBRIGHT,
      ANSI_ESCAPE_CODE.REMOVE_COLOR
    ),
    GREENBRIGHT: format(
      ANSI_ESCAPE_CODE.GREENBRIGHT,
      ANSI_ESCAPE_CODE.REMOVE_COLOR
    ),
    YELLOWBRIGHT: format(
      ANSI_ESCAPE_CODE.YELLOWBRIGHT,
      ANSI_ESCAPE_CODE.REMOVE_COLOR
    ),
    BLUEBRIGHT: format(
      ANSI_ESCAPE_CODE.BLUEBRIGHT,
      ANSI_ESCAPE_CODE.REMOVE_COLOR
    ),
    MAGENTABRIGHT: format(
      ANSI_ESCAPE_CODE.MAGENTABRIGHT,
      ANSI_ESCAPE_CODE.REMOVE_COLOR
    ),
    CYANBRIGHT: format(
      ANSI_ESCAPE_CODE.CYANBRIGHT,
      ANSI_ESCAPE_CODE.REMOVE_COLOR
    ),
    WHITEBRIGHT: format(
      ANSI_ESCAPE_CODE.WHITEBRIGHT,
      ANSI_ESCAPE_CODE.REMOVE_COLOR
    ),

    BGBLACKBRIGHT: format(
      ANSI_ESCAPE_CODE.BGBLACKBRIGHT,
      ANSI_ESCAPE_CODE.REMOVE_BGCOLOR
    ),
    BGREDBRIGHT: format(
      ANSI_ESCAPE_CODE.BGREDBRIGHT,
      ANSI_ESCAPE_CODE.REMOVE_BGCOLOR
    ),
    BGGREENBRIGHT: format(
      ANSI_ESCAPE_CODE.BGGREENBRIGHT,
      ANSI_ESCAPE_CODE.REMOVE_BGCOLOR
    ),
    BGYELLOWBRIGHT: format(
      ANSI_ESCAPE_CODE.BGYELLOWBRIGHT,
      ANSI_ESCAPE_CODE.REMOVE_BGCOLOR
    ),
    BGBLUEBRIGHT: format(
      ANSI_ESCAPE_CODE.BGBLUEBRIGHT,
      ANSI_ESCAPE_CODE.REMOVE_BGCOLOR
    ),
    BGMAGENTABRIGHT: format(
      ANSI_ESCAPE_CODE.BGMAGENTABRIGHT,
      ANSI_ESCAPE_CODE.REMOVE_BGCOLOR
    ),
    BGCYANBRIGHT: format(
      ANSI_ESCAPE_CODE.BGCYANBRIGHT,
      ANSI_ESCAPE_CODE.REMOVE_BGCOLOR
    ),
    BGWHITEBRIGHT: format(
      ANSI_ESCAPE_CODE.BGWHITEBRIGHT,
      ANSI_ESCAPE_CODE.REMOVE_BGCOLOR
    ),
  };
};

module.exports = createFormatting();
// module.exports.createColors = createColors;
