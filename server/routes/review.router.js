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
router.post('/', async (req, res) => {
    const client = await pool.connect();

    try {
        const {
            feeling,
            understanding,
            support,
            comments
        } = req.body;
        await client.query('BEGIN')
        const orderInsertResults = await client.query(`INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4)
        RETURNING id;`, [feeling, understanding, support, comments]);
        const orderId = orderInsertResults.rows[0].id;
        await client.query('COMMIT')
        res.sendStatus(201);
    } catch (error) {
        await client.query('ROLLBACK')
        console.log('Error POST /review', error);
        res.sendStatus(500);
    } finally {
        client.release()
    }
});

module.exports = router;