const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const jwt=require("jsonwebtoken");
const multer=require("multer");
const path=require("path");



dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.get("/",(req,res)=>{
  res.send("express app is running");
})
