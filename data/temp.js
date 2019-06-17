const fs = require('fs');

const films = require('./films.json');
const people = require('./people.json');
const planets = require('./planets.json');
const species = require('./species.json');
const starships = require('./starships.json');
const vehicles = require('./vehicles.json');
const _MAP = require('./_FlattenMap.json');

const asString = JSON.stringify(films, null, 2);

const ref = [
  {
    people: [
      ['https://swapi.co/api/people/34/', 'Finis Valorum'],
      ['https://swapi.co/api/people/36/', 'Jar Jar Binks'],
      ['https://swapi.co/api/people/37/', 'Roos Tarpals'],
      ['https://swapi.co/api/people/38/', 'Rugor Nass'],
      ['https://swapi.co/api/people/39/', 'Ric Olié'],
      ['https://swapi.co/api/people/40/', 'Watto'],
      ['https://swapi.co/api/people/41/', 'Sebulba'],
      ['https://swapi.co/api/people/42/', 'Quarsh Panaka'],
      ['https://swapi.co/api/people/43/', 'Shmi Skywalker'],
      ['https://swapi.co/api/people/44/', 'Darth Maul'],
      ['https://swapi.co/api/people/45/', 'Bib Fortuna'],
      ['https://swapi.co/api/people/46/', 'Ayla Secura'],
      ['https://swapi.co/api/people/48/', 'Dud Bolt'],
      ['https://swapi.co/api/people/49/', 'Gasgano'],
      ['https://swapi.co/api/people/50/', 'Ben Quadinaros']
    ]
  }
];

const oldData = {
  films,
  people,
  planets,
  species,
  starships,
  vehicles
};

const newFilms = 'x';

_MAP.forEach(mapObj => {
  const resource = Object.keys(mapObj)[0];
  const oldDataAsString = JSON.stringify(oldData[resource], null, 2);

  mapObj[resource].reduce((acc, item) => {
    const re = new RegExp(`${item[0]}`, 'g');
    return acc.replace(re, item[1]);
  }, oldDataAsString);
});

const answer = ref[0].people.reduce((acc, item) => {
  const re = new RegExp(`${item[0]}`, 'g');
  return acc.replace(re, item[1]);
}, asString);

// const re = new RegExp('https://swapi.co/api/species/1/', 'g');

// const updated = asString.replace(re, 'Zelip');

// console.log(updated);

// console.log('ANSWER IS:::', answer);

// fs.writeFileSync('__tempOUTPUT.json', answer);

function flattenData(resource) {}
