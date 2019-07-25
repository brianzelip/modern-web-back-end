exports.homePage = (req, res) => {
  res.render('index');
};

exports.get = (req, res) => {
  const resource = req.params.resource;
  // res.send(`The resource parameter sent in the GET request was: ${resource}`)
};
