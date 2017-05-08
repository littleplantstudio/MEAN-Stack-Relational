# Angular Full Stack [![MIT license](http://img.shields.io/badge/license-MIT-lightgrey.svg)](http://opensource.org/licenses/MIT)

The frontend is generated with [Angular CLI](https://github.com/angular/angular-cli). The backend is made from scratch. Whole stack in [TypeScript](https://www.typescriptlang.org).

This project uses the [MEAN stack](https://en.wikipedia.org/wiki/MEAN_(software_bundle)):
* [**M**ySQL](https://https://www.mysql.com/) ([Sequelize](http://docs.sequelizejs.com/)): ORM ([Decorators ](http://docs.sequelizejs.com/))
* [**E**xpress.js](http://expressjs.com): backend framework
* [**A**ngular 4](https://angular.io): frontend framework
* [**N**ode.js](https://nodejs.org): runtime environment
* [Angular CLI](https://cli.angular.io): project scaffolding
* [Bootstrap](http://www.getbootstrap.com): layout and styles
* [Font Awesome](http://fontawesome.io): icons

## Prerequisites
1. Install [Node.js](https://nodejs.org) and [MySQL](https://https://www.mysql.com/)
2. Install Angular CLI: `npm i -g @angular/cli`
3. From project root folder install all the dependencies: `npm i`

## Run
### Development mode
`npm run dev`: [concurrently](https://github.com/kimmobrunfeldt/concurrently) execute MongoDB, Angular build, TypeScript compiler and Express server.

A window will automatically open at [localhost:4200](http://localhost:4200). Angular and Express files are being watched. Any change automatically creates a new bundle, restart Express server and reload your browser.

### Production mode
`npm run prod`: run the project with a production bundle and AOT compilation

## Preview
![Preview](https://raw.githubusercontent.com/DavideViolante/Angular2-Full-Stack/master/demo.gif "Preview")

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `npm start`.

## Running TSLint
Run `ng lint` to execute the linter via [TSLint](https://palantir.github.io/tslint/).

## Further help
To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

To get more help about this project, [visit the wiki](https://github.com/DavideViolante/Angular-Full-Stack/wiki).

### Author
* [Pituk Kaewsuksai](https://github.com/littleplantstudio)

### Fork From
* [Davide Violante](https://github.com/DavideViolante)
