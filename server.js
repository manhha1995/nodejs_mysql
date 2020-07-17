/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable no-console */
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const UrlRoutes = require('./routes/urls');
const mysqlConnection = require('./connection');
const logger = require('morgan');
const dotenv = require('dotenv').config();

const port = process.env.APP_PORT;
const http = require('http');
const { urlencoded } = require('body-parser');
const morgan = require('morgan');

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// define morgan
morgan('dev');
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));

app.use('/url', UrlRoutes);

app.listen(port, http, () => {
  console.log(`Server is listening on ${port}`);
});

module.exports = app;
