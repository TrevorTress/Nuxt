import db from '../connection/db';
import Plant from '../models/Plant';

export default defineEventHandler(async (e) => {
	await db();
	const plantData = await readBody(e);

	try {
		const newPlant = new Plant(plantData);
		await newPlant.save();

		return { success: true, plant: newPlant };
	} catch (error) {
		return { success: false, error: error };
	}
});
