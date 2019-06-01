# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
