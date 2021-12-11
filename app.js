const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const routes = require('./server/routes');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config()

const app = express();
app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', routes);
app.use("/public", express.static(path.join(__dirname, 'public')));

module.exports = app;