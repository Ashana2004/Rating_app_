const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
});

async function seedData() {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('Pass@123', salt);

    const insertQuery = "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)";

    db.query(insertQuery, ['Admin User', 'admin@gmail.com', hashedPassword, 'admin'], (err) => {
      if (err && err.code !== 'ER_DUP_ENTRY') console.error('Error inserting admin:', err);
    });

    db.query(insertQuery, ['Test Owner', 'test@gmail.com', hashedPassword, 'owner'], (err) => {
      if (err && err.code !== 'ER_DUP_ENTRY') console.error('Error inserting owner:', err);
    });

    db.query(insertQuery, ['Normal User', 'user@gmail.com', hashedPassword, 'normal'], (err) => {
      if (err && err.code !== 'ER_DUP_ENTRY') console.error('Error inserting normal user:', err);
      else console.log("Test users created successfully! You can now log in.");
      db.end();
    });

  } catch (error) {
    console.error(error);
    db.end();
  }
}

db.connect((err) => {
  if (err) {
    console.error('Database connection failed. Did you update .env with your MySQL password?', err);
  } else {
    seedData();
  }
});
