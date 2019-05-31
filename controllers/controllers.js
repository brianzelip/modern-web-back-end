// controllers control what happens when a user activates a given route

const axios = require('axios');

exports.homePage = (req, res) => {
  res.render('index');
};

exports.swapi = (req, res) => {
  const url = 'https://swapi.co/api/';
  axios
    .get(`${url}planets/1/?format=json`)
    .then(payload => payload.data)
    .then(data => {
      console.log('\n\n\nDATA is:::', data);
      res.send(data);
    })
    .catch(error => {
      console.log(error);
    });
};
