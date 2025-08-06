const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const port = 3000;

console.log("DB_HOST:" + process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_NAME);

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'sample_db',
  waitForConnections: true,
  connectionLimit: 10,
});

app.get('/data', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT NOW() as time');
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error connecting to DB');
  }
});

// New API to fetch all employees
app.get('/employees', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM employees');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching employees:', err);
    res.status(500).send('Internal server error');
  }
});

app.listen(port, () => {
  console.log(`API listening at at http://localhost:${port}`);
  console.log("DB_HOST:" + process.env.DB_HOST);
  console.log(process.env.DB_USER);
  console.log(process.env.DB_PASSWORD);
  console.log(process.env.DB_NAME);

});