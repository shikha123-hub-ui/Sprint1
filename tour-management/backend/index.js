// Import required packages
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import tourRoute from './routes/tours.js';
import userRoute from './routes/user.js';
import authRoute from './routes/auth.js';
import reviewRoute from './routes/review.js';
import bookingRoute from './routes/bookings.js';

// Load environment variables
dotenv.config();

// Create express app
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin:true,
  credentials:true
}



// Test route
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

// Database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB database connected');
  } catch (err) {
    console.log('MongoDB database connection failed');
  }
};

// Middleware
app.use(bodyParser.json()); // <-- This parses JSON bodies
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/review', reviewRoute);
app.use('/api/v1/booking', bookingRoute);

// Start the server
app.listen(port, () => {
  connect();
  console.log(`Server running on http://localhost:${port}`);
});
