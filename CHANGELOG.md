# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.8.0] - 2019-06-16

### Meta

- branch: flatten-data
- reason: When data gets rendered for a given resource, such as vehicles, the data includes the list of films the vehicle was in. Currently this list of films data are urls as film ids, rather than film name. I want to render the film name, thus flattening the data down to string literals, not url ids for which the swapi.co reasoning is to link to the referenced resource.

Each resource item has a url key that can be used to easily look up the name to replace the rendered url.

### Added/updated

- data/\*.json: replace urls in items with the corresponding resource name

## [0.7.0] - 2019-06-15

### Meta

- branch: local-data

### Added/updated

- data/: data directory for data files for each of the 6 swapi resources
- controllers.js:
  - create new 'get' controller that sends back local json data
  - keep 'swapi' controller to show the students what it looks like to call out to a 3rd party service
- routes.js: create new 'get' route for getting local data, keep swapi endpointt

## [0.6.0] - 2019-06-02

### Meta

- branch: glitch-deployment

### Added

- local .env file with PORT=3000 for glitch (glitch is particular about her port num 💅)
- server.js: Install and require dotenv, update port logic

## [0.5.0] - 2019-06-02

### Meta

- branch: cors

### Added

- package\*: cors dependency
- server.js: use cors

## [0.4.0] - 2019-06-01

### Meta

- branch: get-req-params

### Added

- routes.js: add resource param to route, `/swapi/:resource`
- controllers.js: parse req.params and add :resource to swapi GET url

## [0.3.0] - 2019-05-30 - 2019-05-31

### Meta

- starting point: v0.2.0
- ending poing: v0.3.0
- branch: swapi-endpoint

### Added

- swapi route endpoint
- swapi controller that GETs hardcoded swapi data and res.send()s it

### TODO

- make hardcoded swapi controller data dynamic via request params

## [0.2.0] - 2019-05-28

- starting point: v0.1.0
- ending point: v0.2.0
- branch: master

Turned the glitch.com express starter app into a MVC-structured app. Got the hello world working.

## [0.1.0] - 2019-05-28

Initiated project based around the glitch.com express starter app's server.js.
