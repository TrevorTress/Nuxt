import db from '../../connection/db';
import Plant from '../../models/Plant';

export default defineEventHandler(async (e) => {
	await db();
	const plantName = getRouterParam(e, 'plant');
	const plant = await Plant.findOne({ name: plantName });
	return plant;
});
