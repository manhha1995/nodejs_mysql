/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const { json } = require('body-parser');
const db = require('../connection');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const rows = await db.all();
    res.json(rows);
  } catch (e) {
    console.log(e);
    res.statusCode = 500;
  }
});

router.post('/:name', (req, res) => {
  try {
    const rows = db.one();
    res.json(req.params.rows);
  } catch (e) {
    console.log(e);
    res.statusCode = 500;
  }
});

module.exports = router;
