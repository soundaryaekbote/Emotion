import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';

import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Use import.meta.url to get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Database and Cloudinary connection
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// API endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

// Serve the static files for the frontend and admin applications
app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));
app.use('/admin', express.static(path.join(__dirname, '..', 'admin', 'dist')));

// Serve the index.html for the main frontend application
app.get('*', (req, res) => {
    // Exclude API routes from this catch-all
    if (!req.path.startsWith('/api') && !req.path.startsWith('/admin')) {
        res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'));
    }
});

// Serve the index.html for the admin portal
app.get('/admin/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'admin', 'dist', 'index.html'));
});

// Start the server
app.listen(port, () => console.log('Server started on PORT: ' + port));