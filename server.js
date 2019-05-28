// server.js
// where your node app starts

// init project
const express = require('express');

const routes = require('./routes/routes.js');

const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// Application Settings, http://expressjs.com/en/api.html#app.settings.table
app.set('views', `${process.cwd()}/views`);

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// create moduler, mountable route handler, http://expressjs.com/en/guide/routing.html#express-router
app.use('/', routes);

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
