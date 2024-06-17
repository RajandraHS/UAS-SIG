const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'UAS_SIG',
    password: '1',
    port: 5432,
});

app.get('/api/minimarket', async (req, res) => {
    try {
        const result = await pool.query('SELECT "nama", latitude, longitude FROM "tblminimarket"');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('OOPS! Pengambilan data error');
    }
});

app.listen(port, () => {
    console.log(`Server ini berjalan pada: http://localhost:${port}`);
});
