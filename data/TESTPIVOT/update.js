const fs = require('fs');

const films = require('./films.json');
const people = require('./people.json');
const planets = require('./planets.json');
const species = require('./species.json');
const starships = require('./starships.json');
const vehicles = require('./vehicles.json');

const _MAP = require('./_map.json');

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
    const solutions = reMap[mapObjectTitle];

    return acc;
  }, unflatString);
});
