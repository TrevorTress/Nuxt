import db from '../../connection/db';
import Section from '../../models/Section';

export default defineEventHandler(async (e) => {
	await db();
	const plant_id = getRouterParam(e, 'plant_id');

	const sections = await Section.find({plant_id: plant_id})
		.populate('pages')
		.exec();
	return sections;
});