const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./server/routes');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', routes);
app.use("/public", express.static(path.join(__dirname, 'public')));

module.exports = app;