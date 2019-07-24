const express = require('express');
const cors = require('cors');

const routes = require('./routes/routes.js');

const app = express();

// see config info in the docs for Application Settings,
// http://expressjs.com/en/api.html#app.settings.table

// tell Express where the views are kept
// VIEWS SET DOCS LINK
app.set('views', `${process.cwd()}/views`);

// use a template engine with views set above
// http://expressjs.com/en/guide/using-template-engines.html
app.set('view engine', 'pug');

// use CORS to allow requests for data from outside of Glitch
// CORS LINK
app.use(cors());

// use code written in another project file (routes.js)
// http://expressjs.com/en/guide/routing.html#express-router
app.use('/', routes);

// listen for requests :)
const listener = app.listen(3000, function() {
  console.log(
    `Your server is live at http://localhost:${listener.address().port}`
  );
});
