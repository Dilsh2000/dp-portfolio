const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        // Check if user already exists
        const exists = await User.findOne({ username: 'admin' });
        if (!exists) {
            const user = new User({ username: 'admin', password: 'password123' });
            await user.save();
            console.log('Admin user created (username: admin, password: password123)');
        } else {
            console.log('Admin user already exists');
        }

        process.exit();
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedAdmin();
