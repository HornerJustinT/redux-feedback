const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /reviews');
    pool.query('SELECT * from "reviews";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /reviews', error)
        res.sendStatus(500);
    });
})

module.exports = router;