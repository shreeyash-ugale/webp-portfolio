import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/api';

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for specific origins
app.use(cors({
  origin: [
    'https://webp-portfolio-shree.vercel.app', 
    'http://localhost:5173'  // Keep local development working
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

// Parse JSON requests
app.use(express.json());

// API routes
app.use('/api', apiRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});