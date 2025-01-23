import express from 'express';
const cors = require('cors');
import todoRouter from './routes/todo_routes';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3001;
const DATABASE_URI = process.env.DATABASE_URI || '';

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(DATABASE_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
    process.exit(1);
  });

// Use the todo router for API endpoints
app.use('/api/todo', todoRouter);
