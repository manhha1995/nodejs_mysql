/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const mysql = require('mysql');
const dotenv = require('dotenv').config();

const mysqlConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB,
  port: process.env.DB_PORT,
});

mysqlConnection.connect((err) => {
  if (!err) { console.log('Connected succesfully!'); } else console.log(`Connection failed!${JSON.stringify(err, undefined, 2)}`);
});

const proxyDB = {};

proxyDB.all = () => new Promise((resolve, reject) => {
  mysqlConnection.query('SELECT * FROM urls', (rows, err) => {
    if (err) {
      return reject(err);
    } return resolve(rows);
  });
});

proxyDB.one = (name) => new Promise((resolve, reject) => {
  mysqlConnection.query('SELECT * FROM urls where name = ?', [req.params.name], (rows, err) => {
    if (!err) {
      return resolve(rows[0]);
    }
    return reject(err);
  });
});

module.exports = proxyDB;
