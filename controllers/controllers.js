// controllers control what happens when a user activates a given route

// const axios = require('axios');
const fs = require('fs');

exports.homePage = (req, res) => {
  res.render('index');
};

// exports.swapi = (req, res) => {
//   const url = 'https://swapi.co/api/';
//   const resource = req.params.resource;

//   axios
//     .get(`${url}${resource}/?format=json`)
//     .then(payload => {
//       res.send(payload.data);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

exports.swapi = (req, res) => {
  const resource = req.params.resource;

  const data = JSON.parse(fs.readFileSync(`../data/${resource}.json`, 'utf8'));
  console.log('data is:::', data);

  // res.send(data);
};
