exports.homePage = (req, res) => {
  res.render('index');
};

const myName = {
  firstName: 'Brian',
  lastName: 'Zelip',
}

exports.get = (req, res) => {
  const resource = req.params.resource;
  res.send(`The resource parameter sent in the GET request was: ${resource}`)
  // res.send(myName);
};
