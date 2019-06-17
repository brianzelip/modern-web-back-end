const fs = require('fs');

const films = require('./films.json');
const people = require('./people.json');
const planets = require('./planets.json');
const species = require('./species.json');
const starships = require('./starships.json');
const vehicles = require('./vehicles.json');
const _MAP = require('./_FlattenMap.json');

const oldData = {
  films,
  people,
  planets,
  species,
  starships,
  vehicles
};

function arrOfFiles(resourceName) {
  return Object.keys(oldData).filter(resource => resource !== resourceName);
}

_MAP.forEach(mapObj => {
  const resource = Object.keys(mapObj)[0];
  const filesToParse = arrOfFiles(resource);

  filesToParse.forEach(fileName => {
    const oldDataAsString = JSON.stringify(oldData[fileName], null, 2);
    // console.log('\n\n\nmapObj.films!!::', mapObj.films);
    // console.log('\n\n\nmapObj!!::', mapObj);
    const newDataAsString = mapObj[resource].reduce((acc, item) => {
      const re = new RegExp(`${item[0]}`, 'g');
      return acc.replace(re, item[1]);
    }, oldDataAsString);

    fs.writeFileSync(`__${fileName}.json`, newDataAsString);
  });
});
