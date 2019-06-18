const fs = require('fs');

const films = require('./films.json');
const people = require('./people.json');
const planets = require('./planets.json');
const species = require('./species.json');
const starships = require('./starships.json');
const vehicles = require('./vehicles.json');

const _MAP = require('./_FlattenMap.json');

const files = {
  films,
  people,
  planets,
  species,
  starships,
  vehicles
};

const resources = Object.keys(files);

resources.forEach(resource => {
  const unflatString = JSON.stringify(files[resource], null, 2);

  const flatString = _MAP.reduce((acc, reMap) => {
    const mapObjectTitle = Object.keys(reMap)[0];

    if (mapObjectTitle == resource) {
      return acc;
    }

    const solutions = reMap[mapObjectTitle];

    solutions.forEach(solution => {
      const lookup = new RegExp(solution[0], 'g');
      const replacement = solution[1];
      acc = acc.replace(lookup, replacement);
    });

    return acc;
  }, unflatString);

  fs.writeFileSync(`./__${resource}.json`, flatString);
});
