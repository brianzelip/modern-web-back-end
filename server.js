// server.js
// where your node app starts

// init project
const express = require('express');
const cors = require('cors');

const routes = require('./routes/routes.js');

const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// Application Settings, http://expressjs.com/en/api.html#app.settings.table
app.set('views', `${process.cwd()}/views`);

// use a template engine with views dir set above
// http://expressjs.com/en/guide/using-template-engines.html
app.set('view engine', 'pug');

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// enable CORS header to allow cross-origin requests for data
app.use(cors());

// create moduler, mountable route handler, http://expressjs.com/en/guide/routing.html#express-router
app.use('/', routes);

// listen for requests :)
const listener = app.listen(3000, function() {
  console.log(
    `Your server is live at http://localhost:${listener.address().port}`
  );
});
