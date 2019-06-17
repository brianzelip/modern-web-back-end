const fs = require('fs');

const planets = require('./planets.json');
const species = require('./species.json');
const starships = require('./starships.json');
const vehicles = require('./vehicles.json');
const _MAP = require('./_map2.json');

const oldData = {
  planets,
  species,
  starships,
  vehicles
};

function filesSubset(resource) {
  // don't write over the url value for each resource
  return Object.keys(oldData).filter(r => r !== resource);
}

_MAP.forEach(mapObj => {
  const resource = Object.keys(mapObj)[0];

  var a = mapObj[resource];
  var b = mapObj[`${resource}`];

  filesSubset(resource).forEach(file => {
    const _resource = file;
    const oldDataAsString = JSON.stringify(oldData[_resource], null, 2);

    const newDataAsString = mapObj[resource].reduce((acc, item) => {
      const re = new RegExp(item[0], 'g');
      const replacement = item[1];
      const newStr = acc.replace(re, replacement);
      return acc.replace(re, item[1]);
    }, oldDataAsString);

    fs.writeFileSync(`__${_resource}.json`, newDataAsString);
  });
});
