// controllers control what happens when a user activates a given route

// const axios = require('axios');
const fs = require('fs');

exports.homePage = (req, res) => {
  res.render('index');
};

exports.get = (req, res) => {
  const resource = req.params.resource;
  const filePath = `data/${resource}.json`;
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  res.send(data);
};

exports.swapi = (req, res) => {
  const url = 'https://swapi.co/api/';
  const resource = req.params.resource;

  axios
    .get(`${url}${resource}/?format=json`)
    .then(payload => {
      res.send(payload.data);
    })
    .catch(error => {
      console.log(error);
    });
};
