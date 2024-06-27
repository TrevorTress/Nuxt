import db from '../connection/db';
import Plant from '../models/Plant';

export default defineEventHandler(async (e) => {
	await db();
	const plants = Plant.find({});
	return plants;
});
