// Call this program on the command line, passing in:
// 1. map file
// 2. data filenames, from the same directory.

const fs = require('fs');

const resources = [
  'films',
  'people',
  'planets',
  'species',
  'starships',
  'vehicles'
];

function arrOfFiles(resourceName) {
  return resources.filter(resource => resource !== resourceName);
}

console.log(arrOfFiles('species'));
