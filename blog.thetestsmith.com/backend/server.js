const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create a MySQL connection pool (adjust with your credentials)
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'your_host', // Replace with your host, usually 'localhost' or an IP address
  user: 'your_username', // Replace with your database username
  password: 'your_password', // Replace with your database password
  database: 'your_database_name' // Replace with your database name
});

// Endpoint to get all categories
app.get('/categories', (req, res) => {
  pool.query('SELECT * FROM categories', (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

// Endpoint to add a new category
app.post('/categories', (req, res) => {
  const { name } = req.body;
  pool.query('INSERT INTO categories (name) VALUES (?)', [name], (error, results, fields) => {
    if (error) throw error;
    res.json({ id: results.insertId, name });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
