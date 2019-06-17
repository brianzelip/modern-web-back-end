// update.js

const films = require('./films.json');
const people = require('./people.json');
const planets = require('./planets.json');
const species = require('./species.json');
const starships = require('./starships.json');
const vehicles = require('./vehicles.json');

const _MAP = require('./_map.json');

const resources = {
  films,
  people,
  planets,
  species,
  starships,
  vehicles
};

Object.keys(resources).forEach(resource => {
  const oldFile = resources[resource];
});
