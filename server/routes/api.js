const express = require('express');
const { Client } = require('pg');

const router = express.Router();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: false
});

client.connect()
  .then(() => console.log(`connected to ${process.env.DATABASE_URL}`))
  .catch((err) => {
    console.log(err);
  });

router.get('/', (req, res, next) => {
  let results;
  client.query('SELECT * FROM projects')
    .then((res) => results = res);
  res.send({msg: results});
  next();
});

module.exports = router;
