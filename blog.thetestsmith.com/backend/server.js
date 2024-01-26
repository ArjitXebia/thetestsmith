const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'server382.iseencloud.com', // Replace with your database host, usually 'localhost' if on the same server
  user: 'thetestsm', // Replace with your database username
  password: 'Dr@gon12ball', // Replace with your database password
  database: 'thetestsm_blogposts'
});

// Connect to the MySQL server
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

// Endpoint to create a new blog post
app.post('/createPost', (req, res) => {
  const postData = req.body;
  console.log("Received data for new post:", postData);

  const sql = 'INSERT INTO blogposts SET ?';
  connection.query(sql, postData, (error, results) => {
    if (error) {
      console.error("Error inserting data into the database: ", error);
      res.status(500).send("Error inserting data into the database");
      return;
    }

    console.log(`Post added successfully with ID: ${results.insertId}`);
    res.send(`Post added with ID: ${results.insertId}, Status: ${postData.status}`);
  });
});

// Set the server to listen on port 3000
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
