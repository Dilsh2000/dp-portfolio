const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
    console.error('ERROR: MONGODB_URI is not defined in environment variables');
}

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => {
        console.error('MongoDB connection error details:');
        console.error(err.message);
        if (err.message.includes('unescaped characters')) {
            console.error('HINT: Your MongoDB password contains special characters that need to be URL encoded (e.g., @ -> %40). Please check your MONGODB_URI in Vercel settings.');
        }
    });


app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);

// Health check / Root route
app.get('/', (req, res) => {
    const status = mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected';
    res.json({
        message: 'Portfolio API is running...',
        mongodb: status,
        environment: process.env.NODE_ENV || 'development'
    });
});

// Fallback for undefined routes
app.use((req, res) => {
    res.status(404).json({ message: `Route not found: ${req.originalUrl}` });
});


const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
