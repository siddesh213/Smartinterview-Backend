import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import planRoutes from './routes/planRoutes.js';
import dsaRoutes from './routes/dsaRoutes.js';
import systemDesignRoutes from './routes/systemDesignRoutes.js';
import dbmsRoutes from './routes/dbmsRoutes.js';
import progressRoutes from './routes/progressRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/plan', planRoutes);
app.use('/api/dsa', dsaRoutes);
app.use('/api/system-design', systemDesignRoutes);
app.use('/api/dbms', dbmsRoutes);
app.use('/api/progress', progressRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
