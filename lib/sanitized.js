function sanitize(array) {
  console.log('This is the array:' + array);
  let cleanArray = [];
  for (let index = 0; index < array.length; index++) {
    cleanArray.push(array[index].toLowerCase());
  }
  return cleanArray;
}
if (require.main === module) {
  console.log('Running Sanity Checks for sanitized');
  console.log(sanitize(['abba', 'AbAA', 'JAELYN', 'KeNDaHl']));
}

module.exports = sanitize;
