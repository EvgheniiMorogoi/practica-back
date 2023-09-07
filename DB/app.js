const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'DESKTOP-O7SRPOG\SQLEXPRESS',     // MySQL server host (change this if your MySQL server is hosted elsewhere)
  user: 'DESKTOP-O7SRPOG\Jenya', // MySQL username
  password: '', // MySQL password
  database: 'test3', // MySQL database name
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Perform database operations here

// Close the MySQL connection when done
connection.end();
