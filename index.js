//index.js


exports.log = (value) => {
  console.log(value)
}
exports.info = (value) => {
  console.log(new Date());
  console.log(`INFO: ${value}`)
}

exports.debug = (value) => {
  console.log(new Date());
  console.log(`DEBUG: ${value}`)
}

exports.warn = (value) => {
  console.log(new Date());
  console.log(`WARN: ${value}`)
}

exports.error = (value) => {
  console.log(new Date());
  console.log(`ERROR: ${value}`)
}
exports.trace = (value) => {
  console.log(new Date());
  console.log(`TRACE: ${value}`)
}