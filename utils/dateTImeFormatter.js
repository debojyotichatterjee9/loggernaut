module.exports =  formatDateTime = (date, format) => {
  const map = {
    YYYY: date.getFullYear(),
    MM: ("0" + (date.getMonth() + 1)).slice(-2),
    DD: ("0" + date.getDate()).slice(-2),
    HH: ("0" + date.getHours()).slice(-2),
    mm: ("0" + date.getMinutes()).slice(-2),
    ss: ("0" + date.getSeconds()).slice(-2),
  };

  return format.replace(/YYYY|MM|DD|HH|mm|ss/gi, (matched) => map[matched]);
}