// const mysql = require('mysql2/promise');

//test connection
// const connection = mysql.createPool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: 'root',
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
//   });

// database.js
const mongoose = require('mongoose');

const connection = async () => {
  try {
    await mongoose.connect('mongodb://root:123456@localhost:27017/hoidanit?authSource=admin', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
};

module.exports = connection;


