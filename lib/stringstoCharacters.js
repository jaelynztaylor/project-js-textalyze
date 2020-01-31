let stringstoCharacters = function(string) {
  let arrayCharacters = [];
  for (let i of string) { arrayCharacters.push(i); }

  return arrayCharacters;
}

if (require.main === module) {
  console.log('Running Sanity Checks for stringstoCharacters');
  console.log(stringstoCharacters('hello'));
  console.log(stringstoCharacters('pineapple'));
  console.log(stringstoCharacters('My name is Jaelyn'));
  console.log(stringstoCharacters('His name is Kendahl'));
}

module.exports = stringstoCharacters;
