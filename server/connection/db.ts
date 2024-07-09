// server/database.js
import mongoose from 'mongoose';
import Tab from '../models/Tab';

const db = async () => {
	if (mongoose.connection.readyState >= 1) {
		console.log('Already connected to database.');
		return;
	}

	try {
		await mongoose.connect(process.env.MONGODB_URI || '');
		console.log('Connected to database successfully.');
	} catch (error) {
		console.error('Database connection failed:', error);
	}
};

export default db;
