const fs = require('fs');

exports.homePage = (req, res) => {
  res.render('index');
};

// exports.get = (req, res) => {
//   const resource = req.params.resource;
//   const filePath = `data/${resource}.json`;
//   const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
//   res.send(data);
// };
