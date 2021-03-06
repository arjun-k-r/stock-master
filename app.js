const express = require('express');
const routes = require('./routes/index');
const helmet = require('helmet');
const path = require('path');
const errorHandlers = require('./handlers/errorHandlers');

const app = express();

// secure app by setting http headers
app.use(helmet());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// serve up static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// use routes
app.use('/', routes);

app.use(errorHandlers.notFound);

// really bad error we didn't expect
if (app.get('env') === 'development') {
  // development error handler: prints stack trace
  app.use(errorHandlers.developmentErrors);
}

// production error handler
app.use(errorHandlers.productionErrors);


module.exports = app;
