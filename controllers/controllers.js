// controllers control what happens when a user activates a given route

const axios = require('axios');

exports.homePage = (req, res) => {
  res.render('index');
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
